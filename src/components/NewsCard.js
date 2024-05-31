import React from 'react';
import styled from 'styled-components';

const StyledNewsCard = styled.div`
  display: flex; /* Allow image and content to sit side-by-side */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px; /* Add spacing between cards */
  cursor: pointer; /* Indicate clickable behavior */
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle hover effect */
  }
`;

const StyledNewsCardImage = styled.img`
  width: 100px; /* Adjust image width */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Crop image to fit container */
  margin-right: 10px; /* Add spacing between image and content */
`;

const StyledNewsCardContent = styled.div`
  flex: 1; /* Allow content area to expand to fill remaining space */
`;

const StyledNewsCardTitle = styled.h3`
  margin-bottom: 5px; /* Add spacing between title and description */
`;

const StyledNewsCardDescription = styled.p`
  font-size: 0.8rem; /* Adjust description font size (optional) */
`;

const NewsCard = ({ article }) => {
  return (
    <StyledNewsCard>
      <StyledNewsCardImage src={article.image} alt={article.title} />
      <StyledNewsCardContent>
        <StyledNewsCardTitle>{article.title}</StyledNewsCardTitle>
        <StyledNewsCardDescription>{article.description}</StyledNewsCardDescription>
      </StyledNewsCardContent>
    </StyledNewsCard>
  );
};

export default NewsCard;
