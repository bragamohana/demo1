import React from 'react';
import Form from '../Form';
import aboutimage2 from '../images/aboutimage2.jpg';
import './registerpage.css';

function Registerpage() {
  return (
    <div>
      <div className="bgimage">
        <img src={aboutimage2} alt="bgimage" className='bgimage'/>
      </div>
      <div className="actual-form">
        {" "}
        <Form />
      </div>
      <div className='register-text'><h2>EDUCATION IS THE PASSPORT FOR THE FUTURE, FOR TOMORROW BELONGS TO THE PEOPLE WHO PREPARE FOR IT TODAY!</h2></div>
    </div>
  );
}

export default Registerpage;