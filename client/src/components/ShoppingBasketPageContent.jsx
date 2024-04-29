import React, { useState, useEffect, useReducer } from "react";
import ShoppingBasket from "./ShoppingBasket";
import PriceDisplay from "./PriceDisplay";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { TotalItemsInBasket, TotalPrice } from "./ShoppingBasketPage";

const ShoppingBasketPageContent = (props) => {

  const navigate = useNavigate();

  const [user, setUser] = useContext(UserContext)

  const [localPrice, setLocalPrice] = useState(props.totalPrice);

  let classes = []

  const [, forceUpdate] = useReducer(x => x + 1, 0); // useReducer is just used to force update

  useEffect(()=>{
    console.log("shopingbasketpagecontent useEffect")
    forceUpdate();
  }, [user, user.basket] )

  useEffect(() => {
    forceUpdate();
  }, [props.totalPrice, localPrice])

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
