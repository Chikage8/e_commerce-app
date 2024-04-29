import React, { useState, useEffect, useReducer } from "react";
import ShoppingBasket from "./ShoppingBasket";
import PriceDisplay from "./PriceDisplay";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, TotalItemsInBasket, TotalPrice } from "../App";
// import { TotalItemsInBasket, TotalPrice } from "./ShoppingBasketPage";

const ShoppingBasketPageContent = (props) => {

  const navigate = useNavigate();

  const [user, setUser] = useContext(UserContext)

  const [totalItemsInBasket, setTotalItemsInBasket] = useContext(TotalItemsInBasket)
  let totalItemsInBasketCopy = parseInt(totalItemsInBasket);

  const [totalPrice, setTotalPrice] = useContext(TotalPrice)
  let totalPriceCopy = parseInt(totalPrice);
  
  function totalItemsInBasketGetter() {
    return totalItemsInBasket;
  }

  function totalItemsInBasketSetter(value) {
    setTotalItemsInBasket(value);
  }

  let classes = []

  const [, forceUpdate] = useReducer(x => x + 1, 0); // useReducer is just used to force update

  useEffect(()=>{
    console.log("shopingbasketpagecontent useEffect")
    if (user && user.basket) {
      totalItemsInBasketSetter(0);
      for (let i = 0; i < user.basket.length ; i++) {
        console.log("################### Subtotal is being adjusted by adding the item with id: ", user.basket[i].id, " quantity: ", user.basket[i].quantity);
        totalItemsInBasketCopy += parseInt(user.basket[i].quantity);
        console.log("################### totalItemsInBasketCopy: ", totalItemsInBasketCopy);
      }
    }
    forceUpdate();
  }, [user] )

  function handleClick() {
    navigate('/buy')
  }

  return (
    <div id="basket-content-container">
      <div id="basket-content-left-col">
        <ShoppingBasket
          basketProducts={props.basketProducts}
          checkedProducts={props.checkedProducts}
          quantity={props.quantity}
          childSetQuantity={props.childSetQuantity}
        />
      </div>
      <div id="basket-content-right-col">
        <p>Subtotal({parseInt(totalItemsInBasketCopy) + " "}  {props.itemText} ) </p>
        <PriceDisplay totalItemsInBasket={totalItemsInBasket} setTotalItemsInBasket={props.setTotalItemsInBasket} price={parseFloat(totalPrice.toFixed(2))} setPrice={props.setTotalPrice} classes={classes} />
        <button className="checkout-button" onClick={handleClick}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingBasketPageContent;
