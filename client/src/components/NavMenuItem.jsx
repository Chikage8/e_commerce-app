import React, { useState } from "react";

function NavMenuItem(props) {

    const[open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button svg-container" onClick={()=>setOpen(!open)}> 
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

export default NavMenuItem;