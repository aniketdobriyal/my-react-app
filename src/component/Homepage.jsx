import React from 'react';
import './Homepage.css'; // Optional: Create a CSS file for Homepage styling
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './footer';
import Card from './Card';
import Popup from './Popup';

import { useUser } from './UserContext'; // Adjust the path as needed

function Homepage() {
  const { user, setUser } = useUser(); // Access user context
  return (
    <div className="homepage"> 
     
      <Navbar/>
      <Sidebar/>
      <main>
      <section id="home" className="hero">
      <div className="hero-content">  
      </div>
      </section>
      <section className='verticalLayout'>
          <div className='textDiv'>
            <h1>Business Growth with Custom IT Solutions</h1>
            <p>Our consultancy and application services are designed to drive business growth by streamlining operations, enhancing efficiency, and leveraging the latest technology to give you a competitive edge. We provide tailored solutions that align with your goals, helping you scale faster and smarter.</p>
          </div>
          <div className='imgDiv about-image'>
            <img 
            src="Graphic-Web-Design-PNG-Transparent-Image.png"
            alt="ComputerImage" width={'100%'}
            />
          </div>
        </section>

        <section className='verticalLayout'  id = "revLayout">
          <div className='textDiv'>
            <h1>security Services</h1>
            <p>Our services in security, cloud, and authentication ensure your business operates with maximum protection and flexibility. We secure your data, streamline your processes with cloud solutions, and implement strong authentication to safeguard access—keeping your business safe and scalable.</p>
          </div>
          <div className='imgDiv about-image'>
            <img 
            src="locker.png"
            alt="ComputerImage" width={'100%'}
            />
          </div>
        </section>
      
        <section className='verticalLayout'>
          <div className='textDiv'>
            <h1>Join Us</h1>
            <p>Join our community of innovators and let’s bring your vision to life. Together, we’ll collaborate to turn your ideas into success, with a team that’s as committed to your goals as you are. Let’s start building something great!</p>
          </div>
          <div className='imgDiv about-image'>
            <img 
            src="Work Together Image.png"
            alt="ComputerImage" width={'70%'}
            />
          </div>
        </section>

        <section className='verticalLayout' id = "revLayout">
          <div className='textDiv'>
            <h1>Our Network</h1>
            <p>Our network solutions provide robust connectivity and seamless communication, ensuring your business operates efficiently. We design and implement scalable networks that support your growth while maintaining security and reliability, empowering your team to collaborate effectively.</p>
          </div>
          <div className='imgDiv about-image'>
            <img  
            src="Apps.png"
            alt="ComputerImage" width={'100%'}
            />
          </div>
        </section>
   
        <div className="card-wrapper" style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
      <Card
        title="Software Developer"
        description="A luxurious tropical getaway with stunning views and beaches."
         image="HKstrategies-855.jpg"
      />
      <Card
        title="Data Engneer"
        description="Enjoy serene landscapes and adventurous mountain hikes."
        image="office-worker-3.jpg"
      />
      <Card
        title="Android Developer"
        description="Experience the vibrant energy of the city's skyline."
        image="OIP.jpg"
      />
    </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Homepage;
