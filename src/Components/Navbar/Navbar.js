import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar" >
    <div className="nav-wrapper container">
      <div className="row center">
        <div className="col sm12 m3">
       <a href="/">Home</a>
        </div>
        <div className="col sm12 m3">
        <a href="/about">About</a>
        </div>
        <div className="col sm12 m3">
        <a href="/portfolio">Portfolio</a>
        </div>
        <div className="col sm12 m3">
        <a href="/contact">Contact</a>
        </div>
      </div>
        </div>
        </nav>
);
export default Navbar;
