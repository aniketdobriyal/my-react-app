import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './UserContext'; // Adjust the path as needed
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(10); // Initial y-axis position
  const [isDragging, setIsDragging] = useState(false); // Track if the button is being dragged

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    startDrag(e.clientY);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    startDrag(e.touches[0].clientY);
  };

  const startDrag = (startY) => {
    const initialPosition = buttonPosition;
    setIsDragging(true); // Set dragging state to true

    const onMove = (moveEvent) => {
      const clientY = moveEvent.clientY || moveEvent.touches[0].clientY;
      const deltaY = clientY - startY;
      const newYPosition = initialPosition + deltaY;

      if (newYPosition >= 10 && newYPosition <= window.innerHeight - 50) {
        setButtonPosition(newYPosition);
      }

      // Prevent scrolling while dragging
      moveEvent.preventDefault();
    };

    const onEnd = () => {
      setIsDragging(false); // Reset dragging state
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onEnd);
  };

  // Prevent scrolling on the whole page while dragging
  React.useEffect(() => {
    if (isDragging) {
      const preventScroll = (e) => {
        e.preventDefault();
      };
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [isDragging]);

  const { user, logout } = useUser();
  return (
    
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button
        className="toggle-button"
        onClick={toggleSidebar}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ top: `${buttonPosition}px` }}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>
      <aside>
        <nav className="sidebar-nav">
        {user ? (
        <div className="container-fluid navbar-brand">
       {user.name}
        </div>
      ) : (        
        <div className="container-fluid navbar-brand">
          MyApp
         </div>
      )}

     

    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
      <Link to="/"><ion-icon name="home-outline"></ion-icon><span> Home</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/"><ion-icon name="search-outline" ></ion-icon><span> Search</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/"><ion-icon name="earth-outline" ></ion-icon><span> Explore</span></Link>
      </li>
     
      <li className="nav-item">
        <Link to="/"><ion-icon name="chatbubble-ellipses-outline"></ion-icon><span> Messages</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/"><ion-icon name="notifications-outline"></ion-icon><span> Notification</span></Link>
      </li>
      <li className="nav-item">
      <Link to="/"><ion-icon name="add-circle-outline" ></ion-icon><span> Create</span></Link>
      </li>
      
      <li className="nav-item">
      <Link to="/service"><ion-icon name="reorder-three-outline" ></ion-icon><span> More</span>
      </Link></li>
      
            {user ? (
        <li><Link to="/contact"><img src={user.picture} className="rounded-circle " alt="User 1" width="50"/> 
       <span id = "uni_pro"> Profile</span></Link></li>
      ) : (        
        <li><Link to="/Signup"><img src="OIP (1).jpg" className="rounded-circle " alt="User 1" width="50"/> 
      <span id = "uni_pro"> Profile</span></Link></li>
      )}
     
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
