import React, { useState } from 'react';

const ComposeEmail = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleSend = () => {
    // Logic to send the email goes here
    console.log('Sending email:', { recipient, subject, content });
  };

  return (
    <div className="compose-email">
      <input
        type="text"
        placeholder="To"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Compose your email..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ComposeEmail;
