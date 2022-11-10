import React, {useState} from "react";
import { InfoDropdown } from "./NavItems";
import './Dropdown.css';

function Dropdown() {
    const [ dropdown, setdropdown ] = useState(false);
    return (
        <>
            <ul className=
                {dropdown ? "info-submenu clicked" : "info-submenu"} onClick={() => setdropdown(!dropdown)}>
                {InfoDropdown.map((item) => {
                    return (
                      <li key={item.id}>
                        <span
                          className={item.cName}
                          onClick={() => setdropdown(false)}
                        >
                          {item.title}
                        </span>
                      </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown