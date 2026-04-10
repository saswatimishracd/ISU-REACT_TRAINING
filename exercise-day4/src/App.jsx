import { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (data) => {
    setFeedbacks([...feedbacks, data]);
  };

  return (
    <div className="app">
      <div className="container">
        <FeedbackForm onAdd={addFeedback} />
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </div>
  );
}

export default App;