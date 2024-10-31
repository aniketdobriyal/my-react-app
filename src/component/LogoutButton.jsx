import React from 'react';
import { useUser } from './UserContext';

const LogoutButton = () => {
  const { setUser } = useUser();

  const handleLogout = () => {
    setUser(null); // Clear user state, which will also clear localStorage
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
