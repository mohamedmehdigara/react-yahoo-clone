import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333; /* Adjust background color */
  color: #fff; /* Adjust text color */
  padding: 10px;
  text-align: center;
`;

const StyledCopyright = styled.p`
  margin-bottom: 5px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledNavLink = styled.a`
  color: inherit; /* Inherit text color from StyledFooter */
  text-decoration: none; /* Remove underline */
  margin-right: 10px; /* Add spacing between links */
  
  &:hover {
    color: #aaa; /* Change color on hover */
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyright>&copy; {new Date().getFullYear()} Yahoo Clone. All rights reserved.</StyledCopyright>
      <StyledNav>
        <StyledNavLink href="#">About Us</StyledNavLink>
        <StyledNavLink href="#">Privacy Policy</StyledNavLink>
        <StyledNavLink href="#">Terms of Service</StyledNavLink>
      </StyledNav>
    </StyledFooter>
  );
};

export default Footer;
