import React from 'react';
import './Landing.css';
import aboutimage1 from "../images/aboutimage1.jpg";
import aboutimage2 from "../images/aboutimage2.jpg";
import aboutimage3 from "../images/aboutimage3.jpg";
import aboutimage4 from "../images/aboutimage4.jpg";
import introimage from "../images/introimage.jpg";
import { FaPrayingHands } from "react-icons/fa";

function Landingpage() {
  return (
    <div>
      <div className="first-image">
        <div className="introimage">
          <img src={introimage} alt="introimage" className="introimage" />
        </div>
        <div className="introtext">
          <p>
            <FaPrayingHands /> WELCOME TO UNIVERSITY OF HYDERABAD!
          </p>
        </div>
      </div>
      <div className="landingbutton">
        <div className="landingbtn landingbtn1">
          <button>Admissions</button>
        </div>
        <div className="landingbtn landingbtn2">
          <button>Events</button>
        </div>
        <div className="landingbtn landingbtn3">
          <button>News</button>
        </div>
        <div className="landingbtn landingbtn4">
          <button>Courses</button>
        </div>
      </div>
      <div className="about">
        <div className="aboutimage">
          <img src={aboutimage1} alt="aboutimage1" className="aboutimage1" />
        </div>
        <div className="abouttext">
          <h2>Since 1636!</h2>
          <p>
            {" "}
            Harvard University is a private Ivy League research university in
            Cambridge, Massachusetts. Founded in 1636 as Harvard College and
            named for its first benefactor, the Puritan clergyman John Harvard,
            it is the oldest institution of higher learning in the United States
            and among the most prestigious in the world.
            <br />
            Harvard College is a close-knit undergraduate community within
            Harvard University. With world-class faculty, groundbreaking
            research opportunities, and a commitment to a diverse environment of
            bright, talented students, Harvard is more than just a place to get
            an education—it's where students come to be transformed.
          </p>
        </div>
      </div>
      <div className="branches">
        <div className="btech item"><p>B.TECH</p></div>
        <div className="mtech item"><p>M.TECH</p></div>
        <div className="branch item"><p>BRANCHES</p></div>
        <div className="mba item"><p>MBA</p></div>
        <div className="phd item"><p>PHD</p></div>
      </div>
    </div>
  );
}

export default Landingpage;
