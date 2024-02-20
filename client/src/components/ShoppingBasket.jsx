import React, { useContext, useState } from "react";
import DeselectItems from "./DeselectItems";
import PropValueInfo from "./PropValueInfo";
import QuantitySelector from "./QuantitySelector";
import BasketItem from "./BasketItem";
import { UserContext } from "../App";

const ShoppingBasket = (props) => {

  const [user, setUser] = useContext(UserContext)

  const products = localStorage.getItem("products")
  console.log(products)

  if (user && user.basket && products) {
    for (let i = 0; i < user.basket.length; i++) {
      for (let j = 0; j < products.length; j++)  {
      if (user.basket[i].id === products[i]) {
        console.log(i)
      }
    }
  }
  }
  

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
