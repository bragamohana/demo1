import React from "react";
// import { AiFillTwitterCircle } from 'react-icons/fa';
import "./Footer.css";



const Footer = () => {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col">
              <h3>The University of Hyd</h3>
              <ul className="list-unstyled">
                <li>Admissions</li>
                <li>Events</li>
                <li>News</li>
                <li>Careers</li>
                <li>History</li>
              </ul>
            </div>
            {/* columan2 */}
            <div className="col">
              <h3>Connect With Us</h3>
              <ul className="list-unstyled">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Facebook</li>
                <li>Linkedin</li>
              </ul>
            </div>
            {/* column3 */}
            <div className="col">
              <h3>Address</h3>
              <ul className="list-unstyled">
                <li>
                  F9VR+8H2, Ashok Nagar, Kukatpally Housing Board Colony,
                  Kukatpally, Hyderabad, Telangana 500085
                </li>
                <li>Phone: 040 2315 8661</li>
                <li>E-mail: UniHyd@gmail.com</li>
              </ul>
            </div>
            </div>
            <hr />
            <div className="row1">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THE UNIVERSITY OF HYDERABAD | All Rights Reserved | Terms Of Service | Privacy</p>    
            </div>
        </div>
      </div>
    );
} 

export default Footer;