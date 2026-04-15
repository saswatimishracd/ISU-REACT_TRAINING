import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function TicketDetails() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Ticket ID: #352355</h2>

          <div className="help-box">
            <p>Status: Open</p>
            <p>Description: Sample issue...</p>
          </div>

          {/* CHAT */}
          <div className="help-box chat">
            <div className="message">
              <div className="avatar">PM</div>
              <div className="bubble">Hello Support...</div>
            </div>

            <div className="message">
              <div className="avatar">ST</div>
              <div className="bubble">We are checking...</div>
            </div>

            <div className="reply-box">
              <input placeholder="Reply here..." />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}