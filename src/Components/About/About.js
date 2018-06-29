import React,  {Component} from 'react';

import './About.css';

class About extends Component {

    render() {
      return (
       <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Christian Gingrich</h1>
          <p className="lead text-muted">Aspiring Web Developer </p>
          <p>
            {/* <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a> */}
          </p>
        </div>
      </section>
      )
    }
}

export default About;