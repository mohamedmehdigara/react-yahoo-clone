import React from 'react';
import styled from 'styled-components';

const StyledEmailView = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledEmailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledEmailSender = styled.p`
  font-weight: bold;
`;

const StyledEmailSubject = styled.p`
  font-weight: bold;
`;

const StyledEmailTimestamp = styled.p`
  color: #aaa;
`;

const StyledEmailContent = styled.div`
  /* Add styles for email content (e.g., line spacing, font size) */
`;

const EmailView = ({ email }) => {
  if (!email || typeof email !== 'object' || !email.sender) {
    console.error("Invalid or missing 'email' prop:", email);
    return null; // Or display an appropriate error message
  }

  return (
    <StyledEmailView>
      <StyledEmailHeader>
        <StyledEmailSender>{email.sender}</StyledEmailSender>
        <div>
          <StyledEmailSubject>{email.subject}</StyledEmailSubject>
          <StyledEmailTimestamp>{email.timestamp}</StyledEmailTimestamp>
        </div>
      </StyledEmailHeader>
      <StyledEmailContent>
        <p>{email.content}</p>
        {/* You can add additional elements for attachments or replies */}
      </StyledEmailContent>
    </StyledEmailView>
  );
};

export default EmailView;
