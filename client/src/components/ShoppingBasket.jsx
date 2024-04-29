import React, { useContext, useState } from "react";
import DeselectItems from "./DeselectItems";
import PropValueInfo from "./PropValueInfo";
import QuantitySelector from "./QuantitySelector";
import BasketItem from "./BasketItem";
import { UserContext } from "../App";

const ShoppingBasket = (props) => {

  const [user, setUser] = useContext(UserContext)

  const products = localStorage.getItem("products")

  let basketItems = []

  console.log(user )

  if (typeof user === "object" && 'basket' in user) {
    console.log("building basketItems")
    for (let i = 0; i < user.basket.length; i++) {
      basketItems.push(<BasketItem key={i} id={user.basket[i].id} product={user.basket[i].product} current_price={user.basket[i].current_price} quantityChanged={props.quantityChanged} />)
    }
  }

  console.log(basketItems) // basket items on the user are present but doesnt get assigned to basketItems array
  

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
