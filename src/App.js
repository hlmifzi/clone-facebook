import React from 'react';
import './App.css';
import Header from './components/navbar/Header'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './pages/feed/Feed'
import Login from './pages/auth/Login'
import useAuth from './hooks/useAuth'

function App() {
  const { state } = useAuth()

  return (
    <div className="app">
      {
        !state.user ?
          <Login /> :
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
            </div>
          </>
      }
    </div>
  );
}

export default App;
