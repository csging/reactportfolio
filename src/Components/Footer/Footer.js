import React from 'react';
import './Footer.css';

const Footer = props => (

<div>
<footer className="page-footer grey darken-3">

  <div className="footer-wrapper container">
      <div className="row center">
        <h6>This is my personal portfolio made with React JS and MaterializeCSS </h6>
        <br></br> 
        <div className="col sm12 m4">
       <a href="https://github.com/csging">Github</a>
        </div>
        <div className="col sm12 m4">
        <a href="https://twitter.com/CSGingrich">Twitter</a>
        </div>
        <div className="col sm12 m4">
        <a href="https://www.linkedin.com/in/christian-gingrich/">LinkedIn</a>
        </div>
    
      </div>
      </div>
   
  </footer>
</div>



);
export default Footer;