import "../styles/dashboard.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Central_Bank_of_India_logo.svg/2560px-Central_Bank_of_India_logo.svg.png" />

      <div className="menu-item active">Dashboard</div>
      <div className="menu-item">Transaction Reports</div>
      <div className="menu-item">QR Details</div>
      <div className="menu-item">Language Update</div>
      <div className="menu-item">Help & Support</div>
    </div>
  );
}