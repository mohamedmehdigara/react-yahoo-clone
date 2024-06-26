import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  background-color: #eee; /* Add background color */
  padding: 20px; /* Add padding for content */
  height: 100vh; /* Set sidebar height to 100vh (full viewport height) */
  position: fixed; /* Fix sidebar to the left side of the screen */
  top: 0; /* Position sidebar at the top of the viewport */
  left: 0; /* Position sidebar at the left edge of the viewport */
  width: 200px; /* Set sidebar width */
  box-sizing: border-box; /* Include padding in width calculation */
`;

const StyledSidebarNav = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
`;

const StyledSidebarNavItem = styled.li`
  margin-bottom: 10px; /* Add spacing between navigation items */
`;

const StyledSidebarNavLink = styled(Link)`
  color: #333; /* Set link text color */
  text-decoration: none; /* Remove default underline on links */
  font-weight: bold; /* Make links bolder */
  display: block; /* Allow full width for clickable area */
  padding: 5px 10px; /* Add padding for better hover interaction */
  transition: all 0.2s ease-in-out; /* Add subtle hover effect */

  &:hover {
    background-color: #ddd; /* Add background color on hover */
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h2>Navigation</h2>
      <StyledSidebarNav>
        <StyledSidebarNavItem>
          <StyledSidebarNavLink to="/Inbox">Inbox</StyledSidebarNavLink>
        </StyledSidebarNavItem>
        <StyledSidebarNavItem>
          <StyledSidebarNavLink to="/Compose">Compose</StyledSidebarNavLink>
        </StyledSidebarNavItem>
        <StyledSidebarNavItem>
          <StyledSidebarNavLink to="/Calendar">Calendar</StyledSidebarNavLink>
        </StyledSidebarNavItem>
        <StyledSidebarNavItem>
          <StyledSidebarNavLink to="/Contacts">Contacts</StyledSidebarNavLink>
        </StyledSidebarNavItem>
        <StyledSidebarNavItem>
          <StyledSidebarNavLink to="ToggleButton">Toggle button</StyledSidebarNavLink>
        </StyledSidebarNavItem>
        {/* Add navigation links for other sections if needed */}
      </StyledSidebarNav>
    </StyledSidebar>
  );
};

export default Sidebar;