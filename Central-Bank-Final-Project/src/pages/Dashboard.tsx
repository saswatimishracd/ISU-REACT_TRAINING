import React, { useState } from 'react';
import { useAuthData } from '../context/AuthDataContext';

export default function Dashboard() {
  const { vpqList, isLoadingData, selectedVpa, setSelectedVpa } = useAuthData();
  const [modalSelection, setModalSelection] = useState<any>(null);

  const extractVpaString = (item: any) => typeof item === 'string' ? item : (item?.vpaId || item?.vpa_id || JSON.stringify(item));

  const handleProceed = () => {
    if (modalSelection) {
      setSelectedVpa(modalSelection);
    }
  };

  const handleCancel = () => {
    if (!selectedVpa && vpqList.length > 0) {
       setSelectedVpa(vpqList[0]);
    }
  };

  return (
    <div style={{position: 'relative'}}>
      {/* VPA Selection Modal */}
      {!selectedVpa && vpqList && vpqList.length > 0 && (
        <div style={{
           position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
           backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', 
           alignItems: 'center', justifyContent: 'center'
        }}>
           <div style={{background: 'white', padding: '24px', borderRadius: '8px', width: '400px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
              <h3 style={{marginBottom: '8px', fontSize: '1.25rem'}}>Select VPA</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px'}}>Select a VPA to Proceed</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', maxHeight: '250px', overflowY: 'auto'}}>
                 {vpqList.map((item, idx) => {
                    const val = extractVpaString(item);
                    return (
                       <label key={idx} style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer'}}>
                          <input type="radio" name="vpaSelect" checked={modalSelection === item} onChange={() => setModalSelection(item)} />
                          <span>{val}</span>
                       </label>
                    );
                 })}
              </div>
              
              <div style={{display: 'flex', justifyContent: 'flex-end', gap: '12px'}}>
                 <button onClick={handleCancel} style={{padding: '8px 16px', border: 'none', background: 'transparent', color: 'var(--error-red)', cursor: 'pointer', fontWeight: 500}}>Cancel</button>
                 <button onClick={handleProceed} disabled={!modalSelection} className="btn btn-primary" style={{padding: '8px 24px'}}>Proceed</button>
              </div>
           </div>
        </div>
      )}

      {/* Main Dashboard UI */}
      <div className="page-header" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2rem'}}>
        <h1 className="page-title">Dashboard</h1>
        {selectedVpa && <div style={{marginTop: '1rem', color: 'var(--text-primary)', fontWeight: 500}}><strong>VPA ID : </strong>{extractVpaString(selectedVpa)}</div>}
      </div>
      
      <div className="grid-2">
        <div className="card" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '2rem', gap: '2rem'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background-color)', width: '48px', height: '48px', borderRadius: '8px', color: 'var(--primary-blue)'}}>
             ⇄
          </div>
          <div style={{flex: 1}}>
            <h3 style={{color: 'var(--text-secondary)', fontWeight: 500}}>Total No Of Transaction</h3>
          </div>
          <h2 style={{fontSize: '2rem', color: 'var(--text-primary)'}}>20.7K</h2>
        </div>
        <div className="card" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '2rem', gap: '2rem'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background-color)', width: '48px', height: '48px', borderRadius: '8px', color: 'var(--primary-blue)'}}>
             ₹
          </div>
          <div style={{flex: 1}}>
            <h3 style={{color: 'var(--text-secondary)', fontWeight: 500}}>Total Amount</h3>
          </div>
          <h2 style={{fontSize: '2rem', color: 'var(--text-primary)'}}>76,000 cr</h2>
        </div>
      </div>
      
      {isLoadingData && (
         <div className="card" style={{marginTop: '2rem'}}>
            <p style={{color: 'var(--primary-blue)', fontWeight: 500}}>Fetching secure VPA profile data...</p>
         </div>
      )}
    </div>
  );
}
