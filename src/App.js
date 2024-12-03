import React, { useState } from 'react';
import Login from './Login';
import Welcome from './Welcome';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);
  
  const handleLogout = () => {
    setUser(null);
  };
  
  return (
    <div className="app-container">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Welcome user={user} handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
