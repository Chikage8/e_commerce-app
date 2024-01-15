import React, { useState } from "react";

function NavItem(props, { category, setCategoryApp}) {         
    
    function handleClick() {
        const newCategory = props.category;
        props.setCategoryApp(newCategory);
    }

    return (
        <li className="nav-item">
            <button href="/" className="icon-button svg-container" onClick={handleClick}>
                {props.icon}
            </button>            
        </li>
    );
}

export default NavItem;