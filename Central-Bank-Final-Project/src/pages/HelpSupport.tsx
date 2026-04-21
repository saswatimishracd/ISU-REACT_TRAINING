import React, { useState } from "react";

type Ticket = {
  id: number;
  reason: string;
  transactionId: string;
  description: string;
  status: string;
  date: string;
};

export default function HelpSupport() {
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const [form, setForm] = useState({
    reason: "",
    transactionId: "",
    description: "",
  });

  const handleSubmit = () => {
    const newTicket: Ticket = {
      id: Date.now(),
      reason: form.reason,
      transactionId: form.transactionId,
      description: form.description,
      status: "Pending",
      date: new Date().toLocaleString(),
    };

    setTickets([newTicket, ...tickets]);
    setShowModal(false);
    setForm({ reason: "", transactionId: "", description: "" });
  };

  // 👉 DETAIL VIEW
  if (selectedTicket) {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Ticket #{selectedTicket.id}</h1>
        </div>

        <div className="card">
          <p><b>Reason:</b> {selectedTicket.reason}</p>
          <p><b>Transaction ID:</b> {selectedTicket.transactionId}</p>
          <p><b>Status:</b> {selectedTicket.status}</p>
          <p><b>Description:</b> {selectedTicket.description}</p>

          <button className="btn btn-outline" onClick={() => setSelectedTicket(null)}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HEADER */}
      <div className="page-header" style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h1 className="page-title">Help & Support</h1>
          {tickets.length === 0 && (
            <p style={{color: 'var(--text-secondary)'}}>
              No Data Found. Try raising a ticket.
            </p>
          )}
        </div>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Raise a ticket
        </button>
      </div>

      {/* TABLE */}
<div className="card">
  <h3 style={{marginBottom: '1rem'}}>Tickets</h3>

  <table style={{
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px'
  }}>
    <thead>
      <tr style={{
        background: '#f9fafb',
        textAlign: 'left',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <th style={thStyle}>Transaction ID</th>
        <th style={thStyle}>Date</th>
        <th style={thStyle}>Status</th>
        <th style={thStyle}>Action</th>
      </tr>
    </thead>

    <tbody>
      {tickets.map((t) => (
        <tr key={t.id} style={{
          borderBottom: '1px solid #f1f5f9'
        }}>
          <td style={tdStyle}>{t.transactionId}</td>
          <td style={tdStyle}>{t.date}</td>

          <td style={tdStyle}>
            <span style={{
              padding: '4px 10px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 500,
              backgroundColor: t.status === 'Pending' ? '#fff7ed' : '#e6f4ea',
              color: t.status === 'Pending' ? '#c2410c' : '#2e7d32'
            }}>
              {t.status}
            </span>
          </td>

          <td style={tdStyle}>
            <button className="btn btn-outline" style={{
              padding: '6px 12px',
              fontSize: '12px'
            }} onClick={() => setSelectedTicket(t)}>
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* MODAL */}
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <h3>Raise a Query</h3>

            <div className="form-group">
              <label>Reason</label>
              <input
                className="form-control"
                value={form.reason}
                onChange={(e) => setForm({...form, reason: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Transaction ID</label>
              <input
                className="form-control"
                value={form.transactionId}
                onChange={(e) => setForm({...form, transactionId: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                value={form.description}
                onChange={(e) => setForm({...form, description: e.target.value})}
              />
            </div>

            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 👉 STYLES
const modalOverlay = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const thStyle = {
  padding: '12px 16px',
  fontWeight: 600,
  color: '#374151'
};


const tdStyle = {
  padding: '12px 16px',
  color: '#4b5563'
};

const modalBox = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
};