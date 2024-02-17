import React, { useState } from "react";
import ShoppingBasket from "./ShoppingBasket";
import PriceDisplay from "./PriceDisplay";

const ShoppingBasketPageContent = () => {
  let checkedProducts = [];

  const user = JSON.parse(localStorage.getItem("user"));
  let userId;
  if (user) {
    userId = user.user.id;
  }

  let userBasket = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i).substring(0, 7) == `basket/` &&
      localStorage.key(i).split("/")[1] == userId &&
      localStorage.key(i).split("/").length > 2 &&
      localStorage.key(i).split("/")[2] !== "undefined"
    ) {
      userBasket.push(
        JSON.parse(
          localStorage.getItem(
            `basket/${localStorage.key(i).split("/")[1]}/${
              localStorage.key(i).split("/")[2]
            }`
          )
        )
      );
    }
  }

  let basketItemIds = [];

  // get the Ids of items in the basket
  for (let i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i).substring(0, 7) == `basket/` &&
      localStorage.key(i).split("/")[1] == userId &&
      localStorage.key(i).split("/").length > 2 &&
      localStorage.key(i).split("/")[2] !== "undefined"
    ) {
      basketItemIds.push(parseInt(localStorage.key(i).split("/")[2]));
    }
  }

  return (
    <div id="basket-content-container">
      <div id="basket-content-left-col">
        <ShoppingBasket
          checkedProducts={checkedProducts}
          basketItemIds={basketItemIds}
        />
      </div>
      <div id="basket-content-right-col">
        <p>Subtotal({userBasket ? userBasket.length : 0 + " "} item) </p>
        <PriceDisplay price={0} />
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingBasketPageContent;
