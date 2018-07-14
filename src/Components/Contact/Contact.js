import React,  {Component} from 'react';

import './Contact.css';
class Contact extends Component {

  state= {
    firstName: "",
    lastName: "",
    email: ""
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
      lastName: "",
      email: ""
    });
  }
    render() {
      return (
            <div className="container-contact center-align">

              <div className="rowcenter-align">

              <div className="col s3"></div>

              <div className="container contact-section">

                <div className="col s3 center contact-title">
                  <h4>Contact Me</h4>
                </div>
                
                <div className="col s4 center">
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
                    <input
                      value={this.state.email}
                      name="email"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Email"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                  </form>
                </div>
                <div className="col s3"></div>
              </div>
              </div>
            </div>
            
          
      
      )
    }
}

export default Contact;