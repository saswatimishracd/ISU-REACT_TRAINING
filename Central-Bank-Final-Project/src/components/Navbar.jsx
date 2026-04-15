import { useState } from "react";

export default function Navbar({ onProfileClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <span>Dashboard</span>

      <div>
        <span onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
          👤 Stebin Ben
        </span>

        {open && (
          <div className="dropdown-menu">
            <div onClick={onProfileClick}>View Profile</div>
            <div style={{ color: "red" }}>Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}