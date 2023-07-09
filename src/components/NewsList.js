import React from 'react';

const NewsList = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Breaking News',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Latest Updates',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150',
    },
    // Add more news articles as needed
  ];

  return (
    <div className="news-list">
      <h2>News</h2>
      {newsArticles.map((article) => (
        <div key={article.id} className="news-card">
          <img src={article.image} alt={article.title} />
          <div className="news-content">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
