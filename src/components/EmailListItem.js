import React from 'react';
import styled from 'styled-components';

const StyledEmailListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const StyledSender = styled.p`
  font-weight: bold;
  flex: 1; /* Allow sender name to expand */
`;

const StyledSubject = styled.p`
  font-weight: bold;
  margin-left: 10px;
`;

const StyledTimestamp = styled.p`
  color: #aaa;
  margin-left: auto; /* Align timestamp to the right */
`;

const StyledUnreadIndicator = styled.span`
  background-color: #f00;
  color: #fff;
  padding: 3px 5px;
  border-radius: 3px;
  margin-left: 10px;
`;

const StyledImportanceFlag = styled.span`
  background-color: yellow;
  color: black;
  padding: 3px 5px;
  border-radius: 3px;
  margin-left: 10px;
`;

const StyledAttachmentIcon = styled.span`
  /* Add styles for attachment icon (e.g., using SVG or font icon) */
  margin-left: 10px;
`;

const EmailListItem = ({ email, isUnread, isImportant, hasAttachments }) => {
  if (!email || typeof email !== 'object') {
    // Handle the case when email is undefined or not an object
    return null; // Or display an appropriate error message
  }

  return (
    <StyledEmailListItem>
      <StyledSender>{email.sender}</StyledSender>
      <StyledSubject>{email.subject}</StyledSubject>
      <StyledTimestamp>{email.timestamp}</StyledTimestamp>
      {isUnread && <StyledUnreadIndicator>New</StyledUnreadIndicator>}
      {isImportant && <StyledImportanceFlag>!</StyledImportanceFlag>}
      {hasAttachments && <StyledAttachmentIcon></StyledAttachmentIcon>}
    </StyledEmailListItem>
  );
};

export default EmailListItem;
