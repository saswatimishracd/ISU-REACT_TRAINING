import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import "../styles/dashboard.css";

export default function QRDetails() {
  const [type, setType] = useState("static");
  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>QR Details</h2>

          {/* TYPE SELECTION */}
          <div className="qr-box">
            <p>Select The Type of QR</p>

            <label>
              <input
                type="radio"
                checked={type === "static"}
                onChange={() => setType("static")}
              />
              Static
            </label>

            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                checked={type === "dynamic"}
                onChange={() => setType("dynamic")}
              />
              Dynamic
            </label>

            {/* STATIC QR */}
            {type === "static" && (
              <div className="qr-card">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=staticQR" />
                <br />
                <button>Download QR</button>
              </div>
            )}

            {/* DYNAMIC QR */}
            {type === "dynamic" && (
              <>
                <div style={{ marginTop: "10px" }}>
                  <input
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <button onClick={() => setShowQR(true)}>
                    Generate QR
                  </button>
                </div>

                {showQR && (
                  <div className="qr-card">
                    <div className="amount">₹ {amount}</div>

                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${amount}`} />

                    <div className="timer">Valid till 1:29</div>

                    <button onClick={() => setShowSuccess(true)}>
                      Simulate Payment
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <Modal onClose={() => setShowSuccess(false)}>
          <div className="success">
            <h3>Payment Successful!</h3>

            <div className="success-icon">✔</div>

            <p>Your transaction has been completed successfully.</p>

            <button onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
}