import React, { useState } from 'react';
import styled from 'styled-components';


const ToggleButton = () => {
    const ToggleButton = styled.button`
  position: absolute; /* Use absolute positioning */
  top: 10px; /* Adjust top position */
  left: 10px; /* Adjust left position */
  padding: 5px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
`;

  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to track sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle state on button click
  };

  return (
    <ToggleButton onClick={toggleSidebar}>
      {/* Customize icon or text based on current state */}
      {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
    </ToggleButton>
  );
};

export default ToggleButton;
