import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png" alt="Yahoo Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Yahoo" />
        <button type="button" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;

