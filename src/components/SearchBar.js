import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    // Handle potential validation or logic before navigation
    console.log('Search term:', searchTerm); // Replace with actual search logic
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Yahoo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link to={`/search?q=${searchTerm}`} onClick={handleSearch}>
        <button type="button" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
