import React, { useEffect, useState, useContext } from "react";
import BasketItemLeftCol from "./BasketItemLeftCol";
import PropValueInfo from "./PropValueInfo";
import QuantitySelector from "./QuantitySelector";
import PriceDisplay from "./PriceDisplay";
import { UserContext } from "../App.js"
import { ReactComponent as TrashCan } from "../icons/trash-can.svg";

const VerticalBasketItem = (props) => {
  //   const [quantity, setQuantity] = useState(1);
  const [selectQuantity, setSelectQuantity] = useState(false);
  const [user, setUser] = useContext(UserContext)

  let quantity = 1

  function handleDelete() {
    
    if (typeof user == 'object' && 'basket' in user) {
      for (let i = 0; i < user.basket.length; i++) {
        console.log("adsasdsa props.product.id: ", props.product.id)
        console.log("adsasdsa user.basket[i].id: ", user.basket[i].id)
        if (user.basket[i].id !== props.product.id) {
          continue
        } else {
          console.log("adsasdsa removing item")
          user.basket.splice(i,1)
          setUser(user)
          sessionStorage.setItem("user", JSON.stringify(user))
        }
      }
    }
  }

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
    <div id="vertical-basket-item-content">
      <div className="horizontal-line top-margin"></div>
      <div id="vertical-basket-item-left-col-container">
        <img key={`${props.product.id}`} id='basket-item-img' src={props.product.main_image} alt="" /> 
      </div>

      <div id="vertical-basket-item-center-col">
        <PriceDisplay price={props.current_price * itemQuantity} classes={classes} />
      </div>

      <div id="vertical-basket-item-right-col">
        <QuantitySelector
          product={props.product}
          quantity={itemQuantity}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          childSetMyQuantity
          selectQuantity={selectQuantity}
          setSelectQuantity={setSelectQuantity}
        />
        <div id="trash-can-border" onClick={handleDelete}>
          <TrashCan />
        </div>
      </div>
    </div>
  );
}

export default VerticalBasketItem