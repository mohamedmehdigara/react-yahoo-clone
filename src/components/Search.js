import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledSearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
`;

const StyledSearchButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <StyledSearch>
      <StyledSearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <StyledSearchButton onClick={handleSearch}>Search</StyledSearchButton>
    </StyledSearch>
  );
};

export default Search;