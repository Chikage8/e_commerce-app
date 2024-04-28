import React, { useState, useEffect } from "react";
import ShoppingBasket from "./ShoppingBasket";
import PriceDisplay from "./PriceDisplay";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { TotalItemsInBasket, TotalPrice } from "./ShoppingBasketPage";

const ShoppingBasketPageContent = (props) => {

  const navigate = useNavigate();

  const [user, setUser] = useContext(UserContext)

  let classes = []
  useEffect(()=>{
    console.log("shopingbasketpagecontent useEffect")
    // if (user && user.basket) {
    //   // reset values before counting all the basket items
    //   props.setTotalItemsInBasket(0);
    //   props.setTotalPrice(0);
    //   // calculate total number of items in the basket and their total price 
    //   for (let i = 0; i < user.basket.length ; i++) {
    //     console.log("Subtotal is being adjusted by adding the item with id: ", user.basket[i].id, " quantity: ", user.basket[i].quantity, " price: ", user.basket[i].current_price, "\n");
    //     props.setTotalItemsInBasket(props.totalItemsInBasket + user.basket[i].quantity)
    //     props.setTotalPrice(props.totalPrice + user.basket[i].current_price * user.basket[i].quantity)
    //     console.log("i: ", i, " totalItemsInBasket: ", props.totalItemsInBasket, " totalPrice: ", props.totalPrice, "\n");
    //   }
    // }
  }, [user, user.basket] )

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
        <p>Subtotal({parseInt(props.totalItemsInBasket) + " "}  {props.itemText} ) </p>
        <PriceDisplay totalItemsInBasket={props.totalItemsInBasket} setTotalItemsInBasket={props.setTotalItemsInBasket} price={props.totalPrice} setPrice={props.setTotalPrice} classes={classes} />
        <button className="checkout-button" onClick={handleClick}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingBasketPageContent;
