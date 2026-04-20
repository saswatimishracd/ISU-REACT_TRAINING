import React from 'react';
import { useAuth } from 'react-oidc-context';

export default function Login() {
  const auth = useAuth();

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: 700, padding: '2rem', textAlign: 'center'}}>
          Welcome to CBOI<br/>Merchant Portal
        </h1>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h2 style={{color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center'}}>Login</h2>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem', textAlign: 'center', fontSize: '0.9rem'}}>Please authenticate using your SSO credentials to access the merchant portal.</p>
          
          <button 
            className="btn btn-primary" 
            style={{width: '100%', padding: '1rem', fontSize: '1rem'}}
            onClick={() => void auth.signinRedirect()}
          >
            Sign In with Authentik
          </button>
        </div>
      </div>
    </div>
  );
}
