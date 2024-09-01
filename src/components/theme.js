import { createGlobalStyle } from 'styled-components';

const colors = {
  primary: '#007bff', // Blue
  primaryHover: '#0069d9', // Darker blue on hover
  primaryActive: '#005cb2', // Even darker blue on press
  secondary: '#ffc107', // Yellow
  text: '#333', // Text color
  background: '#fff', // Background color
};

const fonts = {
  body: 'system-ui, sans-serif', // Font family for body text
};

const spacings = {
  small: '5px',
  medium: '10px',
  large: '20px',
};

const breakpoints = {
  mobile: '768px', // Media query for mobile devices
  tablet: '1024px', // Media query for tablets
};

const theme = {
  colors,
  fonts,
  spacings,
  breakpoints,
};

export const GlobalStyles = createGlobalStyle`
  /* Add your global styles here (e.g., reset styles, normalize fonts) */
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.body};
  }
`;

export default theme;
