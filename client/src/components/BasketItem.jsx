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

  let userId;
  if (user) {
    userId = user.id;
  }

  console.log(props.checkedProducts)

  let current_price = props.current_price
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
          quantity={props.quantity}
          selectQuantity={selectQuantity}
          setSelectQuantity={setSelectQuantity}
        />
      </div>

      <div id="basket-item-right-col">
        <PriceDisplay price={current_price * props.quantity} classes={classes} />
      </div>
    </div>
  );
};

export default BasketItem;
