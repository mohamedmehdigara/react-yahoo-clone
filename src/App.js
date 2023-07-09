import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-content">
          <SearchBar />
          <NewsList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
