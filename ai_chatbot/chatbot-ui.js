import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatbotUI() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    axios.post('/chat', { message })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [message]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>Chatbot UI</h1>
      <form>
        <input type="text" value={message} onChange={handleSendMessage} />
        <button type="submit">Send</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}

export default ChatbotUI;
