import React, { useState } from 'react';
import EmailView from './EmailView';
import styled from 'styled-components';

const StyledNewsList = styled.div`
  display: flex; /* Allow for flexbox layout if needed */
  flex-wrap: wrap; /* Wrap emails if space is limited */
  /* Add other styles for padding, margin, etc. */
`;

const StyledEmptyState = styled.p`
  text-align: center;
  padding: 10px;
`;

const StyledLoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const NewsList = ({ emails, isLoading, onSortChange, onFilterChange }) => {
  const [sortBy, setSortBy] = useState('date'); // Default sort by date

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Implement sorting logic based on 'sortBy' state

  const filteredEmails = onFilterChange ? onFilterChange(emails) : emails; // Apply filter if provided

  const sortedEmails = filteredEmails.sort((a, b) => {
    // Implement sorting logic based on 'sortBy' value (date, sender, etc.)
  });

  return (
    <StyledNewsList>
      {isLoading ? (
        <StyledLoadingState>
          <span>Loading emails...</span>
        </StyledLoadingState>
      ) : sortedEmails.length === 0 ? (
        <StyledEmptyState>No emails found.</StyledEmptyState>
      ) : (
        <>
          {/* Sorting control (optional) */}
          <select value={sortBy} onChange={handleSortChange}>
            <option value="date">Sort by Date (Newest First)</option>
            <option value="sender">Sort by Sender</option>
            {/* Add more sorting options */}
          </select>
          {sortedEmails&&sortedEmails.map((email) => (
            <EmailView key={email.id} email={email} />
          ))}
        </>
      )}
    </StyledNewsList>
  );
};

export default NewsList;
