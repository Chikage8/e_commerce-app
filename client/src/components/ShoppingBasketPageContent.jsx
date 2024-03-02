import React, { useState, useEffect } from "react";
import ShoppingBasket from "./ShoppingBasket";
import PriceDisplay from "./PriceDisplay";

const ShoppingBasketPageContent = (props) => {

  let classes = []

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
        <PriceDisplay price={props.totalPrice} classes={classes} />
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingBasketPageContent;
