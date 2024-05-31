import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex; /* Allow input and button to sit side-by-side */
  width: 100%; /* Make the search bar full width */
  border: 1px solid #ccc; /* Add a border */
  border-radius: 5px; /* Add rounded corners */
  overflow: hidden; /* Prevent text overflow in input */
  margin-bottom: 10px; /* Add spacing below */
`;

const StyledSearchInput = styled.input`
  flex: 1; /* Allow input to expand to fill available space */
  padding: 10px; /* Add padding for better user experience */
  border: none; /* Remove default input border (styled by StyledSearchBar) */
  outline: none; /* Remove default focus outline */
  font-size: 16px; /* Adjust font size */
  &:focus {
    /* Add styling for focused state (optional) */
    background-color: #eee;
  }
`;

const StyledSearchButton = styled.button`
  background-color: #4CAF50; /* Green color for search button */
  color: white; /* White text for button */
  padding: 10px 16px; /* Adjust padding for button */
  border: none; /* Remove default button border */
  cursor: pointer; /* Indicate clickable behavior */
  transition: all 0.2s ease-in-out; /* Add subtle hover effect */

  &:hover {
    background-color: #3e8e41; /* Darker green on hover */
  }
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    // Handle potential validation or logic before navigation
    console.log('Search term:', searchTerm); // Replace with actual search logic
  };

  return (
    <StyledSearchBar>
      <StyledSearchInput
        type="text"
        placeholder="Search Yahoo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link to={`/search?q=${searchTerm}`} onClick={handleSearch}>
        <StyledSearchButton>
          <i className="fas fa-search"></i>
        </StyledSearchButton>
      </Link>
    </StyledSearchBar>
  );
};

export default SearchBar;
