import React from 'react';

const EmailListItem = ({ email }) => {
  if (!email || typeof email !== 'object') {
    // Handle the case when email is undefined or not an object
    return null; // Or display an appropriate error message
  }

  return (
    <div className="email-list-item">
      <div className="sender">{email.sender}</div>
      <div className="subject">{email.subject}</div>
      <div className="timestamp">{email.timestamp}</div>
    </div>
  );
};

export default EmailListItem;
