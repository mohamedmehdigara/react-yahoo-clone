import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to="/Inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/Compose">Compose</Link>
        </li>
        <li>
          <Link to="/Calendar">Calendar</Link>  {/* Add Calendar link */}
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>  {/* Add Contacts link */}
        </li>
        {/* Add navigation links for other sections if needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
