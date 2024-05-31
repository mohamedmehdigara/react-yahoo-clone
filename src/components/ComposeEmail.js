// ComposeEmail.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// Import your theme if applicable
// import { theme } from './theme'; // Assuming theme file

const StyledComposeEmail = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1; /* Allow textarea to grow */
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary}; /* Use theme color */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const ComposeEmail = () => {
  const navigate = useNavigate();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email)
    console.log('Email sent!');
    navigate('/'); // Redirect to inbox after submit
  };

  return (
    <StyledComposeEmail>
      <h2>Compose Email</h2>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="email"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <StyledTextArea
          placeholder="Compose your email"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <StyledButton type="submit">Send</StyledButton>
      </form>
    </StyledComposeEmail>
  );
};

export default ComposeEmail;
