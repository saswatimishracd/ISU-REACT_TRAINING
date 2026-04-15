import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function TransactionReports() {
  const [filter, setFilter] = useState("today");

  const data = [
    { id: 1, txn: "e1b18f...", amount: "10,000", date: "24/02/2026", status: "Received" },
    { id: 2, txn: "e1b18f...", amount: "10,000", date: "24/02/2026", status: "Received" },
    { id: 3, txn: "e1b18f...", amount: "10,000", date: "24/02/2026", status: "Received" },
  ];

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Transaction Reports</h2>

          {/* FILTER */}
          <div className="filter-box">
            <p>Select a Report Filter</p>

            <div className="filter-row">
              <label>
                <input
                  type="radio"
                  checked={filter === "today"}
                  onChange={() => setFilter("today")}
                />
                Today
              </label>

              <label>
                <input
                  type="radio"
                  checked={filter === "monthly"}
                  onChange={() => setFilter("monthly")}
                />
                Monthly
              </label>

              <label>
                <input
                  type="radio"
                  checked={filter === "custom"}
                  onChange={() => setFilter("custom")}
                />
                Custom Range
              </label>
            </div>

            <div style={{ marginTop: "10px" }}>
              {filter === "monthly" && (
                <select>
                  <option>Last 3 Month Report</option>
                </select>
              )}

              {filter === "custom" && (
                <>
                  <input className="date-input" placeholder="Start Date" />
                  <input className="date-input" placeholder="End Date" />
                </>
              )}

              <button style={{ marginLeft: "10px" }}>Submit</button>
            </div>
          </div>

          {/* SEARCH + DOWNLOAD */}
          <div className="top-bar">
            <input className="search" placeholder="Search here..." />
            <button>Download All</button>
          </div>

          {/* TABLE */}
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.txn}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td className="status">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="pagination">
            <div className="page">1</div>
            <div className="page active">2</div>
            <div className="page">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}