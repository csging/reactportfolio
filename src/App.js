import React, { Component } from 'react';
// import logo from './logo.svg';
import {Route, BrowserRouter} from 'react-router-dom';
// import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Navbar from './Components/Navbar/Navbar';
// import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


// const theme = createMuiTheme({
//   palette: {
//     primary: blue,
//   },
// });
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <BrowserRouter>
          <div>
            <Route exact path="/" component = {About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </div>
          </BrowserRouter>
          {/* </Navbar> */}
      </div>
          

    );
  }
}

export default App;
