import React, { useState } from "react";
import DeselectItems from "./DeselectItems";
import PropValueInfo from "./PropValueInfo";
import QuantitySelector from "./QuantitySelector";
import BasketItem from "./BasketItem";

const ShoppingBasket = (props) => {
  let basketItems = [];

  props.basketProducts.forEach((product) => {
    basketItems.push(
      <BasketItem
        key={product.id}
        item={product}
        checkedProducts={props.checkedProducts}
        quantity={props.quantity}
        childSetQuantity={props.childSetQuantity}
      />
    );
  });

  return (
    <div id="shopping-basket-container">
      <h1 id="shopping-basket-title">Shopping Basket</h1>
      <DeselectItems checkedProducts={props.checkedProducts} />
      <div className="end-of-line">
        <p>Price</p>
      </div>
      <div className="horizontal-line"></div>
      <div id="shopping-basket-content">{basketItems}</div>
    </div>
  );
};

export default ShoppingBasket;
