import React from 'react';

const EmailView = ({ email }) => {
  if (!email || typeof email !== 'object' || !email.sender) {
    console.error("Invalid or missing 'email' prop:", email);
    return null; // Or display an appropriate error message
  }

  return (
    <div className="email-view">
      <div className="email-sender">{email.sender}</div>
      <div className="email-subject">{email.subject}</div>
      <div className="email-timestamp">{email.timestamp}</div>
      <div className="email-content">{email.content}</div>
    </div>
  );
};

export default EmailView;
