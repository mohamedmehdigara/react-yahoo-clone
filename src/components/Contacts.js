import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledContacts = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-left: 200px;
`;

const StyledContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledContactItem = styled.li`
  margin-bottom: 10px;
`;

const StyledContactName = styled.h3`
  margin-bottom: 5px;
`;

const StyledContactDetails = styled.p`
  margin-bottom: 5px;
`;

const Contacts = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
  ]);

  return (
    <StyledContacts>
      <h2>Contacts</h2>
      <StyledContactList>
        {contacts.map((contact) => (
          <StyledContactItem key={contact.id}>
            <StyledContactName>{contact.name}</StyledContactName>
            <StyledContactDetails>Email: {contact.email}</StyledContactDetails>
            <StyledContactDetails>Phone: {contact.phone}</StyledContactDetails>
          </StyledContactItem>
        ))}
      </StyledContactList>
    </StyledContacts>
  );
};

export default Contacts;