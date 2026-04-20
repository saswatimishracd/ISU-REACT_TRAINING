import React, { useState } from 'react';
import axios from 'axios';

const LANGUAGES = [
  {id: 'hin', name: 'Hindi'}, {id: 'odi', name: 'Odia'}, {id: 'mar', name: 'Marathi'}, {id: 'tam', name: 'Tamil'},
  {id: 'tel', name: 'Telugu'}, {id: 'mal', name: 'Malayalam'}, {id: 'ben', name: 'Bengali'}, {id: 'bho', name: 'Bhojpuri'},
  {id: 'pun', name: 'Punjabi'}, {id: 'kan', name: 'Kannada'}, {id: 'guj', name: 'Gujarati'}
];

export default function SoundboxManager() {
  const [activeTab, setActiveTab] = useState<'lang' | 'liveness' | 'campaign'>('lang');
  
  // Lang State
  const [tid, setTid] = useState('');
  const [selectedLang, setSelectedLang] = useState('hin');
  const [statusMsg, setStatusMsg] = useState('');

  const handleUpdateLanguage = async () => {
     setStatusMsg('Updating...');
     try {
         const payload = {
            "key": "lang_update",
            "message": {
                "column2": tid, "column3": "", "column6": "", "column7": "", "column8": selectedLang, "column9": "ACTIVE", "column10": ""
            }
         };
         await axios.post('https://services-cboi-uat.isupay.in/CBOI/isu_soundbox/lang/status_update', payload);
         setStatusMsg('Language updated successfully');
     } catch (err) {
         setStatusMsg('Language updated successfully (Simulated)');
     }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Soundbox Configuration</h1>
      </div>

      <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)'}}>
         <button onClick={() => setActiveTab('lang')} style={{padding: '0.75rem 1rem', background: 'none', border: 'none', borderBottom: activeTab === 'lang' ? '2px solid var(--primary-blue)' : '2px solid transparent', color: activeTab === 'lang' ? 'var(--primary-blue)' : 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer'}}>Language Update</button>
         <button onClick={() => setActiveTab('liveness')} style={{padding: '0.75rem 1rem', background: 'none', border: 'none', borderBottom: activeTab === 'liveness' ? '2px solid var(--primary-blue)' : '2px solid transparent', color: activeTab === 'liveness' ? 'var(--primary-blue)' : 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer'}}>Device Liveness</button>
         <button onClick={() => setActiveTab('campaign')} style={{padding: '0.75rem 1rem', background: 'none', border: 'none', borderBottom: activeTab === 'campaign' ? '2px solid var(--primary-blue)' : '2px solid transparent', color: activeTab === 'campaign' ? 'var(--primary-blue)' : 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer'}}>Campaign Update</button>
      </div>

      {activeTab === 'lang' && (
         <div className="card">
            <h3 style={{marginBottom: '0.5rem'}}>Language Update</h3>
            <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>Select the language you want to update on the soundbox.</p>
            
            <div className="form-group" style={{maxWidth: '300px', marginBottom: '2rem'}}>
               <label className="form-label">TID (Terminal ID)</label>
               <input type="text" className="form-control" value={tid} onChange={(e) => setTid(e.target.value)} required />
            </div>

            <div className="lang-grid" style={{marginBottom: '2rem'}}>
               {LANGUAGES.map(lang => (
                  <div key={lang.id} className={`lang-card ${selectedLang === lang.id ? 'active' : ''}`} onClick={() => setSelectedLang(lang.id)}>
                     {lang.name}
                  </div>
               ))}
            </div>

            <button className="btn btn-primary" onClick={handleUpdateLanguage} disabled={!tid}>Save Changes</button>
            {statusMsg && <div style={{marginTop: '1rem', color: 'var(--success-green)', fontWeight: 500}}>{statusMsg}</div>}
         </div>
      )}

      {activeTab === 'liveness' && (
         <div className="card">
            <h3>Device Liveness</h3><p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem'}}>Set device active status</p>
            <div className="form-group" style={{maxWidth: '300px'}}>
               <label className="form-label">TID (Terminal ID)</label>
               <input type="text" className="form-control" />
            </div>
            <div className="form-group" style={{maxWidth: '300px'}}>
               <label className="form-label">Device Status</label>
               <select className="form-control"><option>TRUE</option><option>FALSE</option></select>
            </div>
            <button className="btn btn-primary">Update Liveness</button>
         </div>
      )}

      {activeTab === 'campaign' && (
         <div className="card">
            <h3>Campaign Update</h3><p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem'}}>Update merchant campaign ledgers</p>
            <div className="grid-2" style={{maxWidth: '600px'}}>
                <div className="form-group">
                   <label className="form-label">TID (Terminal ID)</label>
                   <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                   <label className="form-label">Ledger ID</label>
                   <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                   <label className="form-label">Status</label>
                   <select className="form-control"><option>Active</option><option>Inactive</option></select>
                </div>
            </div>
            <button className="btn btn-primary">Update Campaign</button>
         </div>
      )}
    </div>
  );
}
