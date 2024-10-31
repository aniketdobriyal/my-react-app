import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx';
import './index.css';
const clientId = '287464842093-ggg3ii9k7a0f8ujt3vibsbe3ma3vd3ut.apps.googleusercontent.com'; // Replace with your client ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
)
