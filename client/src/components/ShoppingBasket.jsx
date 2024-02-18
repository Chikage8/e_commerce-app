import React, { useState } from "react";
import DeselectItems from "./DeselectItems";
import PropValueInfo from "./PropValueInfo";
import QuantitySelector from "./QuantitySelector";
import BasketItem from "./BasketItem";

const ShoppingBasket = (props) => {

  return (
    <div id="shopping-basket-container">
      <h1 id="shopping-basket-title">Shopping Basket</h1>
      <DeselectItems checkedProducts={props.checkedProducts} />
      <div className="end-of-line">
        <p>Price</p>
      </div>
      <div className="horizontal-line"></div>
      <div id="shopping-basket-content">{props.basketItems}</div>
    </div>
  );
};

export default ShoppingBasket;
