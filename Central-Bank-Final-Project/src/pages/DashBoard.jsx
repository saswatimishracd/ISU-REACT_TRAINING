import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import Modal from "../components/Modal";
import { useState } from "react";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const [showVPA, setShowVPA] = useState(true);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar onProfileClick={() => setShowProfile(true)} />

        <div className="content">
          <h2>Dashboard</h2>
          <p>ID: Pabitra.hota@cbin</p>

          <div className="cards">
            <StatCard title="Total No Of Transaction" value="20.7K" />
            <StatCard title="Total Amount" value="76,000 cr" />
          </div>
        </div>
      </div>

      {/* VPA Modal */}
      {showVPA && (
        <Modal onClose={() => setShowVPA(false)}>
          <h3>Select VPA</h3>
          <p>Choose one</p>

          <div>
            <input type="radio" name="vpa" /> user1@cbin
          </div>
          <div>
            <input type="radio" name="vpa" /> user2@cbin
          </div>

          <button>Proceed</button>
        </Modal>
      )}

      {/* Profile Modal */}
      {showProfile && (
        <Modal onClose={() => setShowProfile(false)}>
          <h3>Profile Details</h3>
          <p>Name: Stebin Ben</p>
          <p>Phone: +91 XXXXXXXX</p>
        </Modal>
      )}
    </div>
  );
}