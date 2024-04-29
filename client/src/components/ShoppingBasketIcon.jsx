import React, { useContext } from "react";
import { ReactComponent as Basket } from "../icons/shopping-basket.svg";
import { UserContext } from "../App";

const ShoppingBasketIcon = (props) => {

  const [user, setUser] = useContext(UserContext)

  let totalItemsInBasket = 0
  // loop the user basket and add quantities for acquiring number of total items in the basket
  if (user && user.basket) {
    for (let i = 0; i < user.basket.length ; i++) {
      totalItemsInBasket += parseInt(user.basket[i].quantity)
    }
  }

  return (
    <div id="shoppingbasket-component-container">
      <a href="/basket" className="clickable">
        <div id="shopping-basket-link-container">
          <div id="basket-svg-container" className="svg-container">
            <Basket />
          </div>
          <p> My Basket </p>
          <div id="basketItemCount-container">
            <div> {totalItemsInBasket} </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ShoppingBasketIcon;
