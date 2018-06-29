import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">a little about me </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Follow on Twitter</a></li>
                <li><a href="#" className="text-white">Like on Facebook</a></li>
                <li><a href="#" className="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="nav" className="navbar fixed-top navbar-expand-sm affix box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            About
          </a>
          <a href="/portfolio" className="navbar-brand d-flex align-items-center">
            Portfolio
          </a>
          <a href="/contact" className="navbar-brand d-flex align-items-center">
            Contact
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}};

export default Navbar;