import React from 'react';
import { StateInspector } from "reinspect"
import { hot } from 'react-hot-loader/root';
import Header from './components/navbar/Header'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './pages/feed/Feed'
import Login from './pages/auth/Login'
import useAuth from './hooks/useAuth'
import { AuthProvider } from "./context/AuthContext";
import './App.css';

const Apps = () => {
  return (
    <StateInspector name="facebook">
      <AuthProvider >
        <App />
      </AuthProvider>
    </StateInspector>
  )
}

function App() {
  const { user } = useAuth().state

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

export default hot(Apps);
