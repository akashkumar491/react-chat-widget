import React, { useState } from 'react';

const ChatWidget = ({ propertyId }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'visitor' }]);
    setInput('');
  };

  return (
    <div className={`chat-widget ${open ? 'open' : ''}`}>
      <button className="toggle-button" onClick={() => setOpen(!open)}>
        {open ? '×' : '💬'}
      </button>
      {open && (
        <div className="chat-box">
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="input-area">
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
