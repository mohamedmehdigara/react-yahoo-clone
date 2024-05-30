import React from 'react';
import { useLocation } from 'react-router-dom';

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
    <div className="search-results">
      <h2>Search Results for "{searchTerm}"</h2>
      {/* Display search results here */}
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}> {/* Replace with unique identifier */}
              {result.title || result.name}  {/* Display title or name if available */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
