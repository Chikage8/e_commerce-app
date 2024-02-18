import React, { useState, useEffect } from "react";
import ShoppingBasket from "./ShoppingBasket";
import PriceDisplay from "./PriceDisplay";

const ShoppingBasketPageContent = (props) => {

 

  return (
    <div id="basket-content-container">
      <div id="basket-content-left-col">
        <ShoppingBasket
          basketProducts={props.basketProducts}
          checkedProducts={props.checkedProducts}
          basketItemIds={props.basketItemIds}
          quantity={props.quantity}
          childSetQuantity={props.childSetQuantity}
        />
      </div>
      <div id="basket-content-right-col">
        <p>Subtotal({parseInt(props.item_count) + " "}  {props.itemText} ) </p>
        <PriceDisplay price={props.totalPrice} />
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingBasketPageContent;
