import React from 'react';
import EmailView from './EmailView';

const NewsList = ({ emails }) => {
  // ...
  return (
    <div className="news-list">
      {/* ... */}
      {emails&&emails.map((email) => (
        <EmailView key={email.id} email={email} />
      ))}
    </div>
  );
}

export default NewsList;
