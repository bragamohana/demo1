import React from 'react';
import './Login.css';
import profile from "../images/profile.jpg";
import mail from "../images/mail.jpg";
import Password from "../images/password.jpg";
import { Link } from "react-router-dom";

    export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile" />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <img src={mail} alt="email" className="email" />
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <div className="second-input">
          <label htmlFor="email">Password</label>
          <img src={Password} alt="password" className="email" />
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
            required
          />
        </div>        
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}


export default LoginForm;