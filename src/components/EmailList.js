import React from 'react';
import EmailListItem from './EmailListItem';

const EmailList = ({ emails }) => {
  return (
    <div className="email-list">
      <h2>Your Emails</h2>
      {emails.length > 0 ? (
        <ul>
          {emails.map((email) => (
            <li key={email.id}> {/* Replace with unique identifier */}
              <EmailListItem
                email={email}
                isUnread={email.unread || false} // Set default if 'unread' is not present
                isImportant={email.important || false} // Set default if 'important' is not present
                hasAttachments={email.attachments && email.attachments.length > 0} // Check for attachments array
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No emails found.</p>
      )}
    </div>
  );
};

export default EmailList;
