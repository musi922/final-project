import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import img from "../Navigation/img.jpg"
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {/* Navigation bar to be imported in all pages */}
      <header className="header">
        <div className="heads">
          <img src={img} alt="notfound" style={{ height: '4vh', marginLeft: '12px' }} />
          <Link to={'/'} className="log" style={{textDecoration:"none", }}>
            New Generation Academy<span style={{ color: 'white' }}>
              <br />
              Transformed For Community
            </span>
          </Link>
          <FaBars className="menu-icon" onClick={handleToggle} />
        </div>

        <ul className={isActive ? "nav-links active" : "nav-links"}>
          <Link to={'/'} style={{textDecoration:"none", }}>
            <li >Home Page</li>
          </Link>
          <Link to={'/Newspage'} style={{textDecoration:"none", }}>
            <li>In The News</li>
          </Link>
          <Link to={'/Programspage'} style={{textDecoration:"none", }}>
            <li>Programs</li>
          </Link>
          <Link to={"/AboutPage"} style={{textDecoration:"none", }}>
            <li>About Us</li>
          </Link>
          <Link to={'/Contactpage'} style={{textDecoration:"none", }}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/Staffpage"} style={{textDecoration:"none", }}>
            <li>Staff mail</li>
          </Link>
          <Link to={'/Accountpage'} style={{textDecoration:"none", }}>
            <li>Account</li>
          </Link>
          <FaTimes className="close-icon" onClick={handleToggle} />
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
