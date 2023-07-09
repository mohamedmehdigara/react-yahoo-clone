import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.image} alt={article.title} />
      <div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
