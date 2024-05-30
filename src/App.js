import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmailList from './components/EmailList'; // Assuming you have an EmailList component
import SearchResults from './components/SearchResults'; // Assuming you have a SearchResults component

function App() {
  // Sample email data (replace with actual data fetching logic)
  const emails = [
    { id: 1, sender: 'John Doe', subject: 'Important Meeting', timestamp: '2024-05-31' },
    { id: 2, sender: 'Jane Smith', subject: 'Regarding your order', timestamp: '2024-05-30' },
    // ... more emails
  ];

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<EmailList emails={emails} />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
