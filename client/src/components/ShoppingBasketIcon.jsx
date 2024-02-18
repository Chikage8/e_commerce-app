import React from "react";
import { ReactComponent as Basket } from "../icons/shopping-basket.svg";

const ShoppingBasketIcon = (props) => {
  return (
    <div id="shoppingbasket-component-container">
      <a href="/basket" className="clickable">
        <div id="shopping-basket-link-container">
          <div id="basket-svg-container" className="svg-container">
            <Basket />
          </div>
          <p> My Basket </p>
          <div id="basketItemCount-container">
            <div> {props.quantity} </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ShoppingBasketIcon;
