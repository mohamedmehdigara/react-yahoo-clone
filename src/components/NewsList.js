import React from 'react';

const NewsList = () => {
  // Assuming you have an array of news articles
  const newsArticles = [
    {
      id: 1,
      title: 'Breaking News',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Latest Updates',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more news articles as needed
  ];

  return (
    <div>
      <h2>News List</h2>
      {newsArticles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
