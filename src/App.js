import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from './components/Footer'; // Assuming Footer component
import EmailList from './components/EmailList'; // Assuming EmailList component
import SearchResults from './components/SearchResults'; // Assuming SearchResults component
import ComposeEmail from './components/ComposeEmail'; // Assuming ComposeEmail component
import EmailView from './components/EmailView'; // Assuming EmailView component
import NewsCard from "./components/NewsCard"
import SearchBar from "./components/SearchBar"
import Sidebar from './components/Sidebar';
import NewsList from './components/NewsList';

const App = () => {
  // Sample email data (replace with actual data fetching logic)
  const emails = [
    { id: 1, sender: 'John Doe', subject: 'Important Meeting', timestamp: '2024-05-31', unread: true },
    { id: 2, sender: 'Jane Smith', subject: 'Regarding your order', timestamp: '2024-05-30' },
    // ... more emails
  ];

  // Sample news data (replace with actual data fetching logic)
  const newsArticles = [
    { id: 1, title: 'Breaking News!', content: 'This is some breaking news content.' },
    { id: 2, title: 'Another News Story', content: 'Here is some more news content.' },
    // ... more news articles
  ];

  return (
    <Router>
      <div className="app">
        <Header />  {/* Render the Header component */}
        <main className="main-content">
          <Sidebar /> {/* Render the Sidebar component */}
          <Routes>
            <Route
              path="/"
              element={
                <>  {/* Render both EmailList and NewsList conditionally */}
                  <EmailList emails={emails} />
                  <NewsList newsArticles={newsArticles}> {/* Render NewsList with news */}
                    {newsArticles.map((article) => (
                      <NewsCard key={article.id} article={article} />
                    ))}
                  </NewsList>
                </>
              }
            />
            <Route path="/search" element={<SearchResults />} />  {/* Render SearchResults */}
            <Route path="/compose" element={<ComposeEmail />} />  {/* Render ComposeEmail */}
            <Route path="/email/:emailId" element={<EmailView emails={emails} />} /> {/* Render EmailView with emailId */}
          </Routes>
        </main>
        <Footer />  {/* Render the Footer component */}
      </div>
    </Router>
  );
};

export default App;
