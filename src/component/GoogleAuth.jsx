import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuth = ({ onLoginSuccess }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  };

  const isTokenExpired = (token) => {
    const decoded = parseJwt(token);
    if (!decoded || !decoded.exp) return true;
    const now = Date.now() / 1000; // Current time in seconds
    return decoded.exp < now;
  };

  const handleSuccess = async (response) => {
    setLoading(true);
    const googleToken = response.credential;

    try {
      if (isTokenExpired(googleToken)) {
        throw new Error('Token has expired');
      }

      localStorage.setItem('token', googleToken);
      const decodedUser = parseJwt(googleToken);

      if (decodedUser) {
        const userInfo = {
          name: decodedUser.name,
          email: decodedUser.email,
          picture: decodedUser.picture,
        };

        localStorage.setItem('user', JSON.stringify(userInfo));
        setUser(userInfo);
        if (onLoginSuccess) {
          onLoginSuccess(userInfo);
        }
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('Failed to login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome, {user.name}</h3>
          {user.picture && <img src={user.picture} alt={user.name} />}
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <GoogleLogin onSuccess={handleSuccess} onError={(error) => console.error('Google Sign-In Failed:', error)} />
      )}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default GoogleAuth;
