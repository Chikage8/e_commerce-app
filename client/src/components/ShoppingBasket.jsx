import React, { useState } from "react";
import DeselectItems from "./DeselectItems";
import PropValueInfo from "./PropValueInfo";
import QuantitySelector from "./QuantitySelector";
import BasketItem from "./BasketItem";

const ShoppingBasket = (props) => {
  let products = JSON.parse(localStorage.getItem("products"));
  let basketProducts = []; // basket product info will be stored here

  // get the product information for the items in basket
  props.basketItemIds.forEach((id) => {
    products.forEach((product) => {
      if (id == product.id) {
        basketProducts.push(product);
      }
    });
  });

  let basketItems = [];

  basketProducts.forEach((product) => {
    basketItems.push(
      <BasketItem
        key={product.id}
        item={product}
        checkedProducts={props.checkedProducts}
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
