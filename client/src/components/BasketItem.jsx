import React, { useEffect, useState, useContext } from "react";
import BasketItemLeftCol from "./BasketItemLeftCol";
import PropValueInfo from "./PropValueInfo";
import QuantitySelector from "./QuantitySelector";
import PriceDisplay from "./PriceDisplay";
import { UserContext } from "../App.js"

const BasketItem = (props) => {
  //   const [quantity, setQuantity] = useState(1);
  const [selectQuantity, setSelectQuantity] = useState(false);
  const [user, setUser] = useContext(UserContext)

  let quantity = 1

  if (typeof user == 'object' && 'basket' in user) {
    for (let i = 0; i < user.basket.length; i++) {
      if (user.basket[i].id !== props.product.id) {
        continue
      } else {
        console.log("!!!Setting quantity")
        quantity = user.basket[i].quantity
      }
    }
  }
  console.log("quantity: ", quantity)

  const [itemQuantity, setItemQuantity] = useState(quantity)

  useEffect(()=> {
    console.log("inside UseEffect")
    setItemQuantity(quantity)
  }, [quantity])

  let userId;
  if (user) {
    userId = user.id;
  }

  let classes = ["basket-item-right-col-price"];

  return (
    <div id="basket-item-content">
      <div id="basket-item-left-col-container">
        <BasketItemLeftCol
          key={props.product.id}
          product={props.product}
          // checkedProducts={props.checkedProducts}
        />
      </div>

      <div id="basket-item-center-col">
        <p id="product-detailed-title"> {props.product.detailed_title} </p>
        <div id="climate-friendly-badge-wrapper">
          <img
            id="climate-friendly-badge"
            src="https://m.media-amazon.com/images/I/111pigi1ylL.png"
            alt=""
          />
          <p id="climate-friendly-text">Climate Pledge Friendly</p>
        </div>
        <PropValueInfo prop="Brand" value={props.product.product_brand} />
        <PropValueInfo prop="Color" value={props.product.color} />
        <PropValueInfo prop="Special Features" value={props.product.features} />
        <QuantitySelector
          product={props.product}
          quantity={itemQuantity}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          childSetMyQuantity
          selectQuantity={selectQuantity}
          setSelectQuantity={setSelectQuantity}
        />
      </div>

      <div id="basket-item-right-col">
        <PriceDisplay price={props.current_price * itemQuantity} classes={classes} />
      </div>
    </div>
  );
};

export default BasketItem;
