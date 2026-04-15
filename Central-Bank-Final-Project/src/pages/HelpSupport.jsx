import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

export default function HelpSupport() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const data = [
    {
      id: "123",
      status: "Pending",
      number: "+91 9349872421",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Help & Support</h2>

          <button onClick={() => setShowModal(true)}>
            Raise a ticket
          </button>

          {/* EMPTY */}
          {data.length === 0 ? (
            <div className="empty">No Data Found</div>
          ) : (
            <div className="help-box">
              <table className="table">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Number</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.number}</td>
                      <td>
                        <span className="status-tag pending">
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <span
                          style={{ color: "#1e63b5", cursor: "pointer" }}
                          onClick={() => navigate("/ticket")}
                        >
                          View Details
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3>Raise a Query</h3>

          <select>
            <option>Select Reason</option>
          </select>

          <input placeholder="Transaction ID" />

          <textarea placeholder="Description" />

          <input type="file" />

          <button>Submit</button>
        </Modal>
      )}
    </div>
  );
}