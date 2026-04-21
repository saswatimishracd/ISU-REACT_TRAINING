import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserPlus, Volume2, QrCode, HelpCircle } from 'lucide-react';
import logo from '../assets/CentralBankLogo.png'

export default function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Central Bank of India" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"} end>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-fetch" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <Users size={20} /> Transaction Report
          </NavLink>
        </li>
        <li>
          <NavLink to="/soundbox" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <Volume2 size={20} /> Language Update
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
