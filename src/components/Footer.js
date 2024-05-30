import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Yahoo Clone. All rights reserved.</p>
      <nav>
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
