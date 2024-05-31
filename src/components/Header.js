import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you have FontAwesome installed

const StyledHeader = styled.header`
  display: flex; /* Allow logo and search bar to sit side-by-side */
  justify-content: space-between; /* Align logo and search bar to opposite sides */
  padding: 10px 20px; /* Add padding for spacing */
  background-color: #fff; /* Set background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
`;

// Center the logo using a flexbox container
const StyledLogoContainer = styled.div`
  display: flex; /* Create a flexbox container */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  /* Adjust width or flex-grow if needed for logo positioning */
`;

const StyledLogo = styled.div`
  display: grid; /* Allow for logo image and text alignment */
  align-items: center;
`;

const StyledLogoLink = styled.a`
  text-decoration: none; /* Remove underline from link */
  color: inherit; /* Inherit color from StyledHeader */
`;

const StyledLogoImage = styled.img`
  width: 100px; /* Adjust logo image width */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Add spacing between logo and text (if applicable) */
`;

const StyledSearchBar = styled.div`
  display: flex; /* Allow search input and button to sit side-by-side */
  width: 100%; /* Allow search bar to expand to full available width */
  max-width: 400px; /* Set a maximum width if needed */
`;

const StyledSearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc; /* Add border for input field */
  border-radius: 5px; /* Add rounded corners */
  flex: 1; /* Allow input to expand to fill remaining space */
`;

const StyledSearchButton = styled.button`
  background-color: transparent; /* Remove default button background */
  border: none; /* Remove default button border */
  cursor: pointer; /* Indicate clickable behavior */

  &:hover {
    opacity: 0.8; /* Change opacity on hover for subtle effect */
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      {/* Wrap the logo in the StyledLogoContainer to center it */}
      <StyledLogoContainer>
        <StyledLogo>
          <StyledLogoLink href="https://www.yahoo.com/">
            <StyledLogoImage src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png" alt="Yahoo Logo" />
            {/* Optionally add logo text next to image */}
          </StyledLogoLink>
        </StyledLogo>
      </StyledLogoContainer>
      <StyledSearchBar>
        <StyledSearchInput type="text" placeholder="Search Yahoo" />
        <StyledSearchButton>
          <FontAwesomeIcon icon="search" /> {/* Assuming FontAwesome icon */}
        </StyledSearchButton>
      </StyledSearchBar>
    </StyledHeader>
  );
};

export default Header;
