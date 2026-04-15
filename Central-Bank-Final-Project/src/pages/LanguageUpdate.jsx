import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import "../styles/dashboard.css";
import { updateLanguage } from "../api/languageApi";

const handleUpdate = async () => {
  const payload = {
    key: "lang_update",
    message: {
      column2: "987654321012", // TID (replace later)
      column3: "",
      column6: "",
      column7: "ODIA", // current language
      column8: language.toLowerCase(), // new language
      column9: "ACTIVE",
      column10: "language update request",
    },
  };

  try {
    const res = await updateLanguage(payload);

    if (res.result === "success") {
      setShowSuccess(true);
    } else {
      alert(res.message);
    }
  } catch (err) {
    alert("API Error");
  }
};

export default function LanguageUpdate() {
  const [language, setLanguage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Language Update</h2>

          <div className="language-box">
            <div className="language-grid">
              
              <div className="field">
                <label>VPA ID</label>
                <input value="3456789pabitra@cbin" disabled />
              </div>

              <div className="field">
                <label>Device Serial Number</label>
                <input value="9003567823456" disabled />
              </div>

              <div className="field">
                <label>Current Language</label>
                <input value="Odia" disabled />
              </div>

              <div className="field">
                <label>Language Update</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="">Select Language</option>
                  <option>Odia</option>
                  <option>Tamil</option>
                  <option>Bengali</option>
                  <option>Telugu</option>
                  <option>Marathi</option>
                </select>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="actions">
              <span className="cancel">Cancel</span>

              <button onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <Modal onClose={() => setShowSuccess(false)}>
          <div className="success">
            <h3>Language update request Initiated Successfully</h3>

            <div className="success-icon">✔</div>

            <button onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}