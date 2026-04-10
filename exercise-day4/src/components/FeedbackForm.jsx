import { useState } from "react";
import { submitFeedback } from "../actions/feedback";

function FeedbackForm({ onAdd }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(1);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Submitting...");

    const data = { name, message, rating };

    await submitFeedback(data);

    onAdd(data);

    setStatus("Submitted ✅");
    setName("");
    setMessage("");
    setRating(1);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <textarea
        placeholder="Your Feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">⭐ 1</option>
        <option value="2">⭐⭐ 2</option>
        <option value="3">⭐⭐⭐ 3</option>
        <option value="4">⭐⭐⭐⭐ 4</option>
        <option value="5">⭐⭐⭐⭐⭐ 5</option>
      </select>

      <button type="submit">Submit</button>

      <p className="status">{status}</p>
    </form>
  );
}

export default FeedbackForm;