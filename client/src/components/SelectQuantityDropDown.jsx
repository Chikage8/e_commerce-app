import React, { Children } from "react";

const SelectQuantityDropDown = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let userId;
  if (user) {
    userId = user.user.id;
  }

  console.log(props.item.id);

  const handleClick = (e) => {
    const objectAdditions = { quantity: e.target.textContent };
    const currentObject = JSON.parse(
      localStorage.getItem(`basket/${userId}/${props.item.id}`)
    );
    const newObject = { ...currentObject, ...objectAdditions };
    localStorage.setItem(
      `basket/${userId}/${props.item.id}`,
      JSON.stringify(newObject)
    );
    props.setSelectQuantity(false);
  };

  return (
    <div id="quantity-selector-dropdown">
      <div
        onClick={handleClick}
        className="select-quantity-dropdown-option small-top-margin"
      >
        <p>1</p>
      </div>
      <div onClick={handleClick} className="select-quantity-dropdown-option">
        <p>2</p>
      </div>
      <div onClick={handleClick} className="select-quantity-dropdown-option">
        <p>3</p>
      </div>
      <div onClick={handleClick} className="select-quantity-dropdown-option">
        <p>4</p>
      </div>
      <div onClick={handleClick} className="select-quantity-dropdown-option">
        <p>5</p>
      </div>
    </div>
  );
};

export default SelectQuantityDropDown;
