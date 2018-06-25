import React,  {Component} from 'react';
import Navbar from './Navbar';
import './Contact.css';
class Contact extends Component {

  state= {
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    const {name, value } = event.target;

    this.setState({
      [name]: value
    });

    console.log(event.target)
  };

  handleFormSubmit = event => {
    event.preventDefault();

    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  }
    render() {
      return (
        
        <div>
          
          <div className="container">
            <div className="container main">
            <div className="row" >
              <div className="col align-self-center">
                <h4 className="mb-0 mt-4 display-4">Contact Me</h4>
              </div>
              
              <div className="col p-3 align-self-center">
                <h4 className="mb-4 text-center" align="center">Submit Info here:</h4>
                <form className="form">
                  <input
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                  />
                  <br />
                  <input
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                  />
                  <br />
                  <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
              </div>

              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Contact;