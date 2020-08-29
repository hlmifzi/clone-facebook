import React from 'react';
import './App.css';
import Header from './components/navbar/Header'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './pages/feed/Feed';
function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* feed */}
      {/* widget */}
    </div>
  );
}

export default App;
