import React from 'react';

const InstagramLoginButton = () => {
  const handleInstagramLogin = () => {
    const clientId = 'YOUR_INSTAGRAM_CLIENT_ID';
    const redirectUri = 'https://f64c-2405-201-6820-b858-50be-3ef3-9580-2510.ngrok-free.app/auth/instagram';

    const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

    window.location.href = instagramAuthUrl; // Redirect to Instagram login
  };

  return (
    <div>
      <button onClick={handleInstagramLogin}>Login with Instagram</button>
    </div>
  );
};

export default InstagramLoginButton;
