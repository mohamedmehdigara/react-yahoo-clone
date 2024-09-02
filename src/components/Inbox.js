import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InboxContainer = styled.div`
  display: flex; /* Create a flexbox for side-by-side layout */
`;

const InboxContent = styled.div`
  flex: 1; /* Allow content to fill remaining space */
  padding: 20px;
  margin-left: 200px;
`;

const EmailList = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0;
  margin: 0;
`;

const EmailListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer; /* Indicate clickable behavior for email selection */

  &:hover {
    background-color: #f5f5f5; /* Add subtle hover effect */
  }
`;

const EmailSubject = styled.h3`
  margin-bottom: 5px;
`;

const EmailDetails = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 20px;
`;

const Inbox = () => {
  // Sample email data (replace with your actual data or logic to fetch)
  const emails = [
    { id: 1, subject: 'Important Update', from: 'noreply@important.com', snippet: 'This is an important update you should read.' },
    { id: 2, subject: 'Meeting Reminder', from: 'John Doe', snippet: 'Meeting reminder for tomorrow at 10:00 AM.' },
    { id: 3, subject: 'Welcome to Our Service!', from: 'Welcome Team', snippet: 'Get started with our new service today!' },
  ];

  // State to manage selected email (optional)
  const [selectedEmail, setSelectedEmail] = useState(null);

  // Function to handle email selection (optional)
  const handleEmailClick = (email) => {
    setSelectedEmail(email); // Update selected email state
  };

  return (
    <InboxContainer>
      <InboxContent>
        <h2>Inbox</h2>
        <EmailList>
          {emails.map((email) => (
            <EmailListItem key={email.id} onClick={() => handleEmailClick(email)}>
              <EmailSubject>{email.subject}</EmailSubject>
              <p>{email.from}</p>
            </EmailListItem>
          ))}
        </EmailList>
        {selectedEmail && (
          <EmailDetails>
            <h3>{selectedEmail.subject}</h3>
            <p>From: {selectedEmail.from}</p>
            <p>{selectedEmail.snippet}</p>
            {/* Add more details or functionality for viewing email content */}
          </EmailDetails>
        )}
      </InboxContent>
    </InboxContainer>
  );
};

export default Inbox;