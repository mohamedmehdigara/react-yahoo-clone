import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Sidebar from './components/Sidebar';
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <NewsList />
      </div>
    </div>
  );
}

export default App;
