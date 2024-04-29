import React, { Children, useContext } from "react";
import { UserContext, TotalItemsInBasket, TotalPrice } from "../App";
import { QuantityChanged } from "./ShoppingBasketPage.jsx";

const SelectQuantityDropDown = (props) => {
  const [user, setUser] = useContext(UserContext)
  const [quantityChanged, setQuantityChanged] =  useContext(QuantityChanged)

  const [totalPrice, setTotalPrice] = useContext(TotalPrice)
  const [totalItemsInBasket, setTotalItemsInBasket] = useContext(TotalItemsInBasket)

  let userId;
  if (user) {
    userId = user.id;
  }

  console.log(props.product.id);

  const handleClick = (e) => {
    // set item quantity to e.target.textContent
    console.log("1")
    if (user && user.basket) {
      console.log("2")
      for (let i = 0; i < user.basket.length ; i++) {
        console.log("3")
        console.log(props.product.id)
        console.log(user.basket[i].id)
        if (props.product.id !== user.basket[i].id) {
          console.log("4")
          continue
        } else { // this user.basket[i] is our product in the basket
          console.log("setting both quantities")
          console.log(e.target.textContent)
          const quantityDif = e.target.textContent - user.basket[i].quantity
          console.log("quantityDif: ", quantityDif)
          const priceDif = quantityDif * user.basket[i].current_price
          setTotalItemsInBasket(prevTotalItems => prevTotalItems + quantityDif)
          // setTotalItemsInBasket(totalItemsInBasket + quantityDif)
          // setTotalPrice(totalPrice + priceDif)
          setTotalPrice(prevTotalPrice => prevTotalPrice + priceDif)
          user.basket[i].quantity = e.target.textContent
          setUser(user)
          sessionStorage.setItem("user", JSON.stringify(user))
          props.setItemQuantity(e.target.textContent)
          setQuantityChanged(!quantityChanged)
        }
      }
    }
    props.setSelectQuantity(false);
  };

  return (
    <div id="quantity-selector-dropdown">
      <div
        onClick={handleClick}
        className="select-quantity-dropdown-option small-top-margin"
      >
        <p>1</p>
      </div>
      <div onClick={handleClick} className="select-quantity-dropdown-option">
        <p>2</p>
      </div>
      <div onClick={handleClick} className="select-quantity-dropdown-option">
        <p>3</p>
      </div>
      <div onClick={handleClick} className="select-quantity-dropdown-option">
        <p>4</p>
      </div>
      <div onClick={handleClick} className="select-quantity-dropdown-option">
        <p>5</p>
      </div>
    </div>
  );
};

export default SelectQuantityDropDown;
