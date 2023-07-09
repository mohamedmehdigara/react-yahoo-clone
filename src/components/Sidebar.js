import React from 'react';

const Sidebar = () => {
  // Assuming you have an array of categories
  const categories = [
    'Technology',
    'Sports',
    'Entertainment',
    // Add more categories as needed
  ];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
