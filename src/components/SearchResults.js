import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchResults = styled.div`
  /* Add styles for the overall search results container (optional) */
`;

const StyledSearchHeading = styled.h2`
  margin-bottom: 10px; /* Add spacing below heading */
`;

const StyledSearchResultsList = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
`;

const StyledSearchResultItem = styled.li`
  padding: 10px; /* Add padding for each search result */
  border-bottom: 1px solid #ccc; /* Add separator between results */
  cursor: pointer; /* Indicate clickable behavior for potential navigation */

  &:hover {
    background-color: #eee; /* Add subtle hover effect (optional) */
  }
`;

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('q');

  // Logic to fetch search results based on searchTerm (replace with your implementation)
  const [searchResults, setSearchResults] = React.useState([]);
  React.useEffect(() => {
    // Example using fetch (replace with your data fetching logic)
    fetch(`https://api.example.com/search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results));
  }, [searchTerm]); // Re-fetch on searchTerm change

  return (
    <StyledSearchResults>
      <StyledSearchHeading>Search Results for "{searchTerm}"</StyledSearchHeading>
      {searchResults.length > 0 ? (
        <StyledSearchResultsList>
          {searchResults.map((result) => (
            <StyledSearchResultItem key={result.id}>
              {result.title || result.name} {/* Display title or name if available */}
            </StyledSearchResultItem>
          ))}
        </StyledSearchResultsList>
      ) : (
        <p>No results found for your search.</p>
      )}
    </StyledSearchResults>
  );
};

export default SearchResults;
