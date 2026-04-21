import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell, User, LogOut } from 'lucide-react';
import { useAuth } from 'react-oidc-context';
import { useAuthData } from '../context/AuthDataContext';
import axios from 'axios';
import female from '../assets/female.png'

export default function Layout() {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const { vpqList, setVpaList, isLoadingData, setIsLoadingData } = useAuthData();

  useEffect(() => {
    if (auth.isAuthenticated && vpqList.length === 0 && !isLoadingData) {
      const loadInitialVPA = async () => {
         setIsLoadingData(true);
         try {
            const mobileNumber = auth.user?.profile?.user_name || auth.user?.profile?.preferred_username || auth.user?.profile?.nickname;
            if (!mobileNumber) throw new Error("No mapped mobile number found in SSO Profile");

            // 1. Encrypt Payload
            const encrRes = await axios.post('/api-encr', { mobile_number: mobileNumber }, {
                headers: { key: '82gbZpEWVzTcL5qXB+kSKCes7XbqdNxqKjQeDgdnJX0=' }
            });
            const requestDataFromEncr = encrRes.data; // Expected { RequestData: "..." }
            
            // 2. Fetch using encrypted payload (routed securely through Vite proxy to bypass CORS)
            const fetchRes = await axios.post('https://api-preprod.txninfra.com/encrV4/CBOI/fetch/fetchById', requestDataFromEncr, {
               headers: {
                  'Pass_key': 'c0CKRG7yNFY3OIxY92izqj0YeMk6JPqdOlGgqsv3mhicXmAv',
                  'Authorization': auth.user?.access_token
               }
            });
            const responseDataFromFetch = fetchRes.data?.ResponseData; // Expected string
            
            // 3. Decrypt
            if (responseDataFromFetch) {
               const decrRes = await axios.post('/api-decr', { Req: responseDataFromFetch }, {
                   headers: { key: '82gbZpEWVzTcL5qXB+kSKCes7XbqdNxqKjQeDgdnJX0=' }
               });
               
               let parsedData = decrRes.data;
               if (typeof parsedData === 'string') {
                  try { parsedData = JSON.parse(parsedData); } catch(e){}
               }

               // Array of VPA IDs related to the merchant
               if (parsedData && parsedData.data && Array.isArray(parsedData.data)) {
                  setVpaList(parsedData.data);
               } else if (Array.isArray(parsedData)) {
                  setVpaList(parsedData);
               } else {
                  setVpaList([parsedData]);
               }
            }
         } catch (e) {
            console.error("VPA fetch chain Failed:", e);
         } finally {
            setIsLoadingData(false);
         }
      };
      
      loadInitialVPA();
    }
  }, [auth.isAuthenticated]);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <header className="app-header">
          <div style={{fontWeight: 600, color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <span style={{fontSize: '1.2rem', letterSpacing: '0.5px'}}>Central Bank of India</span>
          </div>
          <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
             <div style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>
               Merchant Support No: <strong>1800 22 1911</strong> | <strong>upi.support@centralbank.co.in</strong>
             </div>
             <Bell size={20} color="var(--text-secondary)" style={{cursor: 'pointer'}} />
             <div style={{position: 'relative'}}>
                <div onClick={() => setMenuOpen(!menuOpen)} style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', background: 'var(--background-color)', padding: '6px 12px', borderRadius: '6px'}}>
                   <img src={female} alt="" style={{width: '24px', height: '24px', borderRadius: '50%'}} /> <span style={{fontWeight: 500, fontSize: '0.9rem'}}>{auth.user?.profile?.name || 'Ben Stebin'}</span>
                </div>
                {menuOpen && (
                   <div style={{position: 'absolute', top: '120%', right: 0, background: 'white', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', minWidth: '150px', zIndex: 100}}>
                      <button onClick={() => { auth.removeUser(); window.location.href='/sso/logout'; }} style={{width: '100%', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', background: 'transparent', border: 'none', color: 'var(--error-red)', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '4px'}}>
                         <LogOut size={16} /> Logout
                      </button>
                   </div>
                )}
             </div>
          </div>
        </header>
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
