import React from 'react';
import './user-info-popup.css';
const UserInformationPopup = ({ user }) => {
  if (!user) {
    return null; // Do not render if no user data
  }

  return (
    <div className="user-info-popup">
      <h2>User Information</h2>
      {user.picture && <img src={user.picture} alt={user.name} />}
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInformationPopup;
