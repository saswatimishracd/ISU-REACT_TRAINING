import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/', { replace: true });
    } else if (auth.error) {
      console.error("Auth error", auth.error);
    }
  }, [auth.isAuthenticated, auth.error, navigate]);

  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{textAlign: 'center'}}>
        <h2>Authenticating...</h2>
        <p style={{color: 'var(--text-secondary)'}}>Please wait while we verify your credentials.</p>
      </div>
    </div>
  );
}
