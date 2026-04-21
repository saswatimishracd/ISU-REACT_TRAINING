import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthData } from '../context/AuthDataContext';
import { useAuth } from 'react-oidc-context';

export default function UserFetch() {
  const { selectedVpa } = useAuthData();
  const auth = useAuth();
  
  const [searchParam, setSearchParam] = useState('vpa_id');
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  // Automatically load the `selectedVpa` data by default!
  useEffect(() => {
     if (selectedVpa) {
        if (typeof selectedVpa === 'object') {
           setResult(selectedVpa);
           setSearchValue(selectedVpa.vpa_id || selectedVpa.vpaId || '');
        } else {
           setSearchValue(selectedVpa);
        }
     }
  }, [selectedVpa]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue) return;
    
    setLoading(true);
    setError('');
    
    try {
      if (!auth.user?.access_token) throw new Error("No Access Token Found for API Auth.");
      
      const payload = { [searchParam]: searchValue };
      
      // 1. Encrypt Payload
      const encrRes = await axios.post('/api-encr', payload, {
          headers: { key: '82gbZpEWVzTcL5qXB+kSKCes7XbqdNxqKjQeDgdnJX0=' }
      });
      const requestDataFromEncr = encrRes.data; 
      
      // 2. Secure Fetch 
      const fetchRes = await axios.post('https://api-preprod.txninfra.com/encrV4/CBOI/fetch/fetchById', requestDataFromEncr, {
         headers: {
            'Pass_key': 'c0CKRG7yNFY3OIxY92izqj0YeMk6JPqdOlGgqsv3mhicXmAv',
            'Authorization': auth.user.access_token
         }
      });
      const responseDataFromFetch = fetchRes.data?.ResponseData;
      if (!responseDataFromFetch) throw new Error("No secure encrypted response received from remote server.");
      
      // 3. Decrypt Payload
      const decrRes = await axios.post('/api-decr', { Req: responseDataFromFetch }, {
          headers: { key: '82gbZpEWVzTcL5qXB+kSKCes7XbqdNxqKjQeDgdnJX0=' }
      });
      
      let parsedData = decrRes.data;
      if (typeof parsedData === 'string') {
         try { parsedData = JSON.parse(parsedData); } catch(err){}
      }
      
      if (parsedData?.status === 0 || parsedData?.data) {
         const dataArray = parsedData.data;
         if (dataArray && dataArray.length > 0) {
             setResult(dataArray[0]);
         } else {
             setError("No merchant records found matching the query.");
             setResult(null);
         }
      } else {
         setError(parsedData?.message || 'Error fetching user');
         setResult(null);
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.message || err.message || 'An error occurred during fetch sequence.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const transactions = [
  {
    id: "e1b18ff4a4563898",
    amount: "10,000",
    date: "24/02/2026, 12:23 PM",
    status: "Received"
  },
  {
    id: "e1b18ff4a4563899",
    amount: "5,000",
    date: "24/02/2026, 01:10 PM",
    status: "Received"
  },
  {
    id: "e1b18ff4a4563900",
    amount: "2,500",
    date: "24/02/2026, 02:45 PM",
    status: "Pending"
  }
];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">User Fetch</h1>
      </div>
      
      <div className="card">
        <form onSubmit={handleSearch} style={{display: 'flex', gap: '1rem', alignItems: 'flex-end'}}>
          <div className="form-group" style={{flex: 1, marginBottom: 0}}>
            <label className="form-label">Search By</label>
            <select className="form-control" value={searchParam} onChange={(e) => setSearchParam(e.target.value)}>
              <option value="vpa_id">VPA ID</option>
              <option value="mobile_number">Mobile Number</option>
              <option value="account_number">Account Number</option>
            </select>
          </div>
          <div className="form-group" style={{flex: 2, marginBottom: 0}}>
            <label className="form-label">Enter Value</label>
            <input 
              type="text" 
              className="form-control" 
              value={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)} 
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{height: '42px'}} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {error && <div className="card" style={{borderLeft: '4px solid var(--error-red)'}}><span style={{color: 'var(--error-red)'}}>{error}</span></div>}

      {result && (
        <div className="card">
           <h3 style={{marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)'}}>Merchant Information</h3>
           <div className="grid-3">
              <div>
                 <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Merchant Name</span>
                 <p style={{fontWeight: 600}}>{result.merchant_name || 'N/A'}</p>
              </div>
              <div>
                 <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Mobile Number</span>
                 <p style={{fontWeight: 600}}>{result.merchant_mobile || 'N/A'}</p>
              </div>
              <div>
                 <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>VPA ID</span>
                 <p style={{fontWeight: 600}}>{result.vpa_id || 'N/A'}</p>
              </div>
              <div>
                 <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Terminal ID</span>
                 <p style={{fontWeight: 600}}>{result.terminal_id || 'N/A'}</p>
              </div>
              <div>
                 <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Merchant Account No</span>
                 <p style={{fontWeight: 600}}>{result.merchant_account_no || 'N/A'}</p>
              </div>
              <div>
                 <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>State</span>
                 <p style={{fontWeight: 600}}>{result.state || 'N/A'}</p>
              </div>
              <div style={{gridColumn: 'span 3'}}>
                 <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>Delivery Address</span>
                 <p style={{fontWeight: 600}}>{result.merchant_delivery_address || 'N/A'}</p>
              </div>
           </div>
        </div>
      )}

      <div className="card">
  <h3 style={{marginBottom: '1rem'}}>Transaction Reports</h3>

  <table style={{width: '100%', borderCollapse: 'collapse'}}>
    <thead>
      <tr style={{textAlign: 'left', borderBottom: '1px solid #ddd'}}>
        <th style={{padding: '10px'}}>S. No.</th>
        <th style={{padding: '10px'}}>Transaction ID</th>
        <th style={{padding: '10px'}}>Amount</th>
        <th style={{padding: '10px'}}>Date</th>
        <th style={{padding: '10px'}}>Status</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map((txn, index) => (
        <tr key={txn.id} style={{borderBottom: '1px solid #f0f0f0'}}>
          <td style={{padding: '10px'}}>{index + 1}</td>
          <td style={{padding: '10px'}}>{txn.id}</td>
          <td style={{padding: '10px'}}>₹ {txn.amount}</td>
          <td style={{padding: '10px'}}>{txn.date}</td>
          <td style={{padding: '10px'}}>
            <span style={{
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              backgroundColor: txn.status === 'Received' ? '#e6f4ea' : '#fff3cd',
              color: txn.status === 'Received' ? '#2e7d32' : '#856404'
            }}>
              {txn.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}
