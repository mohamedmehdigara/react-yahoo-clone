import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Import your theme if applicable
import { theme } from './theme'; // Assuming theme file

const StyledComposeEmail = styled.div`
  padding: 20px;
  border: 1px solid #ddd; /* Use a more neutral border color */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* Add some subtle background color */
  background-color: #f5f5f5;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  /* Consider adding a focus style for better accessibility */
  
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1; /* Allow textarea to grow */
  /* Consider adding a minimum height for better UI */
  min-height: 200px;
`;

const StyledButton = styled.button`
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  /* Add hover and active styles for better interactivity */
 
 
`;

const ComposeEmail = () => {
  const navigate = useNavigate();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isSending, setIsSending] = useState(false); // Flag for sending state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to show a loading indicator (optional)
    try {
      // Implement your email sending logic here (e.g., using an API)
      console.log('Email sent!');
      setIsSending(false); // Reset sending state
      navigate('/'); // Redirect to inbox after successful submit
    } catch (error) {
      setIsSending(false); // Reset sending state in case of error
      console.error('Error sending email:', error);
      // Handle errors appropriately (e.g., display an error message)
    }
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
          required // Mark input as required
        />
        <StyledInput
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required // Mark input as required
        />
        <StyledTextArea
          placeholder="Compose your email"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <StyledButton type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send'} {/* Update button text based on sending state */}
        </StyledButton>
      </form>
    </StyledComposeEmail>
  );
};

export default ComposeEmail;
