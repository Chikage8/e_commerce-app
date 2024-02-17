import React, { useState } from "react";

function NavItem(props) {
  function handleClick() {
    localStorage.setItem("category", JSON.stringify(props.category));
    // const newCategory = props.category;
    // props.setCategoryApp(newCategory);
  }

  return (
    <li className="nav-item">
      <a href="/" className="icon-button svg-container" onClick={handleClick}>
        {props.icon}
      </a>
    </li>
  );
}

export default NavItem;
