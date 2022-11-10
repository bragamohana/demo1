import React from 'react';
import LoginForm from '../components/LoginForm';
import '../components/Login.css'
import './loginpage.css';
import aboutimage4 from '../images/aboutimage4.jpg';
function Loginpage() {
  return (
    <div>
    <div className="bgimage-login">
        <img src={aboutimage4} alt="bgimage" className='bgimage-login'/>
      </div>
      <div className="actual-login-form">
        {" "}
       <LoginForm />
      </div>
      <div className='login-text'><h2>DO SOMETHING NOW THAT YOUR FUTURE SELF WILL THANK YOU LATER! JOIN YOUR HANDS WITH THE UNIVERSITY OF HYDERABAD TODAY!</h2></div>
    </div>
  )
}

export default Loginpage