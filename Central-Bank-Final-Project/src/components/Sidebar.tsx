import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserPlus, Volume2, QrCode, HelpCircle } from 'lucide-react';
import logo from '../assets/CentralBankLogo.png'

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`app-sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Central Bank of India" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" className="sidebar-link">
            <LayoutDashboard size={20} />
            {isOpen && <span>Dashboard</span>}
          </NavLink>
        </li>

        <li>
          <NavLink to="/user-fetch" className="sidebar-link">
            <Users size={20} />
            {isOpen && <span>Transaction Report</span>}
          </NavLink>
        </li>

        <li>
          <NavLink to="/soundbox" className="sidebar-link">
            <Volume2 size={20} />
            {isOpen && <span>Language Update</span>}
          </NavLink>
        </li>

        <li>
          <NavLink to="/qr-generator" className="sidebar-link">
            <QrCode size={20} />
            {isOpen && <span>QR Details</span>}
          </NavLink>
        </li>

        <li>
          <NavLink to="/support" className="sidebar-link">
            <HelpCircle size={20} />
            {isOpen && <span>Help & Support</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
