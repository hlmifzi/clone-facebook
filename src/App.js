import React from 'react';
import './App.css';
import Header from './components/navbar/Header'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './pages/feed/Feed'
import Login from './pages/auth/Login'
import { useSateValue } from './context/provider/StateProvider'

function App() {
  const [{ user }, dispatch] = useSateValue()

  return (
    <div className="app">
      {
        !user ?
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
