import React from "react";
import './Navbar.css';
import { navItems } from "./NavItems";
import Button from './Button';
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [dropdown, setdropdown] = useState(false);
    return (
        <div>
            <nav className="navbar">
                <span className="navbar-logo"><p>University of Hyderabad</p> </span>
                <ul className="nav-items">
                    {navItems.map((item) => {
                        // if (item.title === "Home") {
                        //     return (<a href="/">{item.title}</a>)
                        // }
                          if (item.title === "Info For You") {
                            return (
                              <li
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setdropdown(true)}
                                onMouseLeave={() => setdropdown(false)}
                              >
                                <div className="nav-item">{item.title}</div>
                                {dropdown && <Dropdown />}
                              </li>
                            );
                          }

                        return (
                            <li key={item.id} className={item.cName}>
                                <div className="nav-item">{item.title}</div>
                            </li>
                        );
                    })}

                </ul>
                <Button />
            </nav>
            
            {/* <h2>hi</h2> */}
        </div>
    );
}

export default Navbar;