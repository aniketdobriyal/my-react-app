import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./component/Homepage";
import NotFound from './component/NotFound'; // Component for 404 page
import { UserProvider } from './component/UserContext'; // Import UserProvider
import Signup from './component/Signup';
import Login from './component/Login';

function App() {
  return (
    <UserProvider> {/* Wrap the Router with UserProvider */}
      <Router>
        <Routes>
      
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for unknown routes */}    
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
