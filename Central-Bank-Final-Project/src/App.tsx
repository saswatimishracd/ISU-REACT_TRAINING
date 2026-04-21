import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from 'react-oidc-context';
import { WebStorageStateStore } from 'oidc-client-ts';
import Layout from './components/Layout';
import Login from './pages/Login';
import Callback from './pages/Callback';

import Dashboard from './pages/Dashboard';
import UserFetch from './pages/UserFetch';
import MerchantOnboarding from './pages/MerchantOnboarding';
import SoundboxManager from './pages/SoundboxManager';
import QRGenerator from './pages/QRGenerator';

const oidcConfig = {
  authority: 'https://cboi-auth-stage.isupay.in/application/o/merchant-web-application/',
  client_id: '02WnEFxSElzxzrv3Qht29IacaiO6qKa3pclXleoo',
  redirect_uri: window.location.origin + '/callback',
  post_logout_redirect_uri: window.location.origin + '/sso/logout',
  response_type: 'code',
  scope: 'openid profile email offline_access authorities privileges user_name created adminName bankCode goauthentik.io/api',
  automaticSilentRenew: true,
  loadUserInfo: true,
  monitorSession: true,
  filterProtocolClaims: true,
  userStore: new WebStorageStateStore({
    store: window.sessionStorage
  })
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  
  if (auth.isLoading) return <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.25rem', color: 'var(--primary-blue)'}}>Verifying Session...</div>;
  if (!auth.isAuthenticated) return <Navigate to="/login" />;
  
  return <>{children}</>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/sso/logout" element={<Navigate to="/login" replace />} />
      
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="user-fetch" element={<UserFetch />} />
        <Route path="onboarding" element={<MerchantOnboarding />} />
        <Route path="soundbox" element={<SoundboxManager />} />
        <Route path="qr-generator" element={<QRGenerator />} />
        <Route path="support" element={<HelpSupport />} />
      </Route>
    </Routes>
  );
}


import { AuthDataProvider } from './context/AuthDataContext';
import HelpSupport from './pages/HelpSupport';

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <AuthDataProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthDataProvider>
    </AuthProvider>
  );
}

export default App;
