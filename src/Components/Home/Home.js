import React, {Component} from 'react';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class Home extends Component {
    render() {
      return (
        <div>
        <div className="about">
            <About/>
        </div>

        <div className="portfolio">
            <Portfolio/>
        </div>

        <div className="contact">
            <Contact/>
        </div>

        <div className="footer">
            <Footer/>
        </div>

        </div>

      );
    }
  }
  
  export default Home;
  