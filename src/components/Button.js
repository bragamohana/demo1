import React from "react";
import "./Button.css";
import { Link } from 'react-router-dom';

function Button() {
    return (
        <span>
            <div className="button-sec">
            <Link to="/register"><button className="btn"> Register</button></Link>
                <Link to="/login"><button className="btn"> Log In</button></Link>
            </div>
        </span>
    );
}

export default Button;