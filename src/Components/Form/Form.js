import React,  {Component} from 'react';
import FormBtn from './FormBtn';
import Input from './Input';
import TextArea from './TextArea';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
    firstName: "",
    lastName: "",
    email: ""
    }};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Thanks ${this.state.firstName} ${this.state.lastName}!`);
    this.setState({
      firstName:"",
      lastName: "",
      email: ""
    });
  };

    render() {
      return (
        <div>
            <div className="container">
              {this.state.firstName}{this.state.lastName}
              </div>
              <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              />
              <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              />
              <Input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              />
              <button onClick={this.handleFormSubmit}>Submit</button>
        </div>
      )
    }
}

export default Form;