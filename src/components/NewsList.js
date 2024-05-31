import React, { useState, useEffect } from 'react';
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
  const sortEmails = (emailList) => {
    if (!emailList) return []; // Handle empty email list case

    switch (sortBy) {
      case 'date':
        return emailList.sort((a, b) => b.timestamp - a.timestamp); // Descending order by timestamp
      case 'sender':
        return emailList.sort((a, b) => a.sender.localeCompare(b.sender)); // Sort by sender name
      default:
        return emailList; // Default behavior
    }
  };

  const filteredEmails = onFilterChange ? onFilterChange(emails) : emails; // Apply filter if provided

  const sortedEmails = sortEmails(filteredEmails); // Apply sorting after filtering

  useEffect(() => {
    // Handle potential data fetching here (set isLoading state accordingly)
  }, []); // Empty dependency array to run only once

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
          {sortedEmails.map((email) => (
            <EmailView key={email.id} email={email} />
          ))}
        </>
      )}
    </StyledNewsList>
  );
};

export default NewsList;
