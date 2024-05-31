// EmailList.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledEmailList = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const StyledEmailListItem = styled.div`
  display: flex; /* Allow for inline elements like unread indicator */
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StyledUnreadIndicator = styled.div`
  margin-right: 10px;
  background-color: #f00;
  color: #fff;
  padding: 3px 5px;
  border-radius: 3px;
  display: none; /* Initially hide unread indicator */
`;

const StyledEmailSender = styled.p`
  font-weight: bold;
  flex: 1; /* Allow sender name to expand */
`;

const StyledEmailSubject = styled.p`
  font-weight: bold;
  margin-left: 10px;
`;

const EmailList = ({ emails }) => {
  return (
    <StyledEmailList>
      <h2>Inbox</h2>
      {emails.map((email) => (
        <StyledEmailListItem key={email.id}>
          {email.unread && <StyledUnreadIndicator />}
          <Link to={`/email/${email.id}`}>
            <StyledEmailSender>{email.sender}</StyledEmailSender>
            <StyledEmailSubject>{email.subject}</StyledEmailSubject>
          </Link>
        </StyledEmailListItem>
      ))}
    </StyledEmailList>
  );
};

export default EmailList;

