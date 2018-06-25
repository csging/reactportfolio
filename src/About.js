import React,  {Component} from 'react';
import PortStep from './PortStep';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import './About.css';

class About extends Component {

    render() {
      return (
        <div>
        <div className="container main">
          <div className="row my-5 bg-secondary" background="secondary" margin="verticle 5">
            <div className="p-4 col-md-6 bg-primary"><p classname="mb-1" type="paragraph">Christian Gingrich</p>
              <h2 className="mb-1">About Me: </h2>
              <p className="my-4">stuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuf </p>
              <p className="my-4">stuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuf </p>
              <p className="my-4">stuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuf </p>
            </div>
            <div className="p-0 col-md-6" padding="0"></div>
          </div>
        </div>
        </div>
      )
    }
}

export default About;