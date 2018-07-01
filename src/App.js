import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
// import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <BrowserRouter>
          <div>
            <Route exact path="/" component = {Home} />
            <Route exact path="/about" component = {About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </div>
          </BrowserRouter>
      </div>
          

    );
  }
}

export default App;
