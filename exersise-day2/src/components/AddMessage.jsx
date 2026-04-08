import React, { useState, useRef, useEffect } from "react";

const AddMessage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const addMessage = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [messages]);


  return (
    <>
      <input
        type="text"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message"
      />

      <button onClick={addMessage}>Send</button>

      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}

      <div ref={bottomRef}></div>
    </>
  );
};

export default AddMessage;