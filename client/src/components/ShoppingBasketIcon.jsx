import React from "react";
import { ReactComponent as Basket } from "../icons/shopping-basket.svg";

const ShoppingBasketIcon = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let userId;
  if (user) {
    userId = user.user.id;
  }
  let userBasketLength = 0;
  for (let i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i).substring(0, 7) == `basket/` &&
      localStorage.key(i).split("/")[1] == userId &&
      localStorage.key(i).split("/").length > 2 &&
      localStorage.key(i).split("/")[2] !== "undefined"
    ) {
      console.log(
        JSON.parse(
          localStorage.getItem(
            `basket/${localStorage.key(i).split("/")[1]}/${
              localStorage.key(i).split("/")[2]
            }`
          )
        )
      );
      userBasketLength++;
    }
  }
  // console.log(user.user.basket);
  return (
    <div id="shoppingbasket-component-container">
      <a href="/basket" className="clickable">
        <div id="shopping-basket-link-container">
          <div id="basket-svg-container" className="svg-container">
            <Basket />
          </div>
          <p> My Basket </p>
          <div id="basketItemCount-container">
            <div> {userBasketLength} </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ShoppingBasketIcon;
