import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/succes" className="nav-link">Our Success Stories</Link>
      </div>
      <div className="nav-right">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/register" className="nav-button">Register</Link>
      </div>
    </nav>
  );
}

export default NavBar;
