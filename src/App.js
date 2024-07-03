import React, { useState, useEffect } from 'react';
import FlowBuilder from './components/FlowBuilder';
import SaveButton from './components/saveButton';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedMessage = localStorage.getItem('message');
    if (savedMessage) {
      setMessage(savedMessage);
    }
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSaveChange = () => {
    localStorage.setItem('message', message);
    console.log("Message saved or changed:", message);
  };

  return (
    <div className="App">
      <div className="Button">
        <textarea
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message here"
        />
        <h2>Forward Message</h2>
        <SaveButton onSave={handleSaveChange} />
      </div>
      <FlowBuilder />
    </div>
  );
}

export default App;
