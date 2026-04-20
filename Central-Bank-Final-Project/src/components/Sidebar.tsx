import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserPlus, Volume2, QrCode, HelpCircle } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="sidebar-header">
        CBOI Merchant
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"} end>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-fetch" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <Users size={20} /> User Fetch
          </NavLink>
        </li>
        <li>
          <NavLink to="/onboarding" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <UserPlus size={20} />  Onboarding
          </NavLink>
        </li>
        <li>
          <NavLink to="/soundbox" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <Volume2 size={20} /> Soundbox Manager
          </NavLink>
        </li>
        <li>
          <NavLink to="/qr-generator" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <QrCode size={20} /> QR Details
          </NavLink>
        </li>
        <li>
          <NavLink to="/support" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <HelpCircle size={20} /> Help & Support
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
