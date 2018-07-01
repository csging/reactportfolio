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
        
        <div>
          
          <div className="container">
            <div className="container-contact">
            <div className="row" >
              <div className="col align-self-center">
                <p className="col sm12 m8 ">Contact Me!</p>
              </div>
              
              <div className="col sm12 align-self-center">
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

              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Contact;