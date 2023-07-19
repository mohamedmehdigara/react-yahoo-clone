import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import "./App.css";
import ComposeEmail from './components/ComposeEmail';
import EmailView from './components/EmailView';

function App() {
  const emails = [
    { id: 1, sender: 'john.doe@example.com', subject: 'Hello!', timestamp: 'Today, 10:30 AM', content: 'Hi there, how are you?' },
    // Add more email data here
  ];
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-content">
          <ComposeEmail/>
          <EmailView/>
          <SearchBar />
          <NewsList emails={emails} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
