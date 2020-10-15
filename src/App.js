import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  /* mongodb admin pass: iHucsh5v7eRVtM9a */
  // BEM convention using
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* widgets */}
    </div>
  );
}

export default App;
