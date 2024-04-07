import React, {useContext, useEffect, useState} from "react";
import SelectQuantityDropDown from "./SelectQuantityDropDown";
import { ReactComponent as DownArrow } from "../icons/down-arrow.svg";
import { ReactComponent as TrashCan } from "../icons/trash-can.svg";
import { UserContext } from "../App.js"
import { TotalItemsInBasket, TotalPrice } from "./ShoppingBasketPage.jsx";

const QuantitySelector = (props) => {
  const [user, setUser] = useContext(UserContext)

  // const [totalPrice, setTotalPrice] = useContext(TotalPrice)
  // const [totalItemsInBasket, setTotalItemsInBasket] = useContext(TotalItemsInBasket)

  // let userId;
  // if (user) {
    // userId = user[id];
  // }

  // Get the quantity for the item

  const [quantity, setQuantity] = useState(1)
  
  console.log(user && user.basket)
  
  useEffect(() => {
    console.log("inside useEffect")
    if (typeof user === 'object' && user.basket) { // check against errors
      for (let i = 0; i < user.basket.length; i++) {
        if (user.basket[i].id !== props.product.id) {
          continue
        } else { // item in basket matches this product
          console.log("setting quantity")
          setQuantity(user.basket[i].quantity)
        }
      }
    }
  }, [quantity, setQuantity])
  

  console.log(quantity)

  // const currentObject = JSON.parse(
  //   localStorage.getItem(`basket/${userId}/${props.item.id}`)
  // );

  // console.log(currentObject);

  // quantity = JSON.parse(
  //   localStorage.getItem(`basket/${userId}/${props.item.id}`)
  // ).quantity;

  return (
    <div>
      <div className="quantity-selector-div">
        <button
          className="quantity-selector-button"
          href=""
          onClick={() => props.setSelectQuantity(!props.selectQuantity)}
        >
          
          {props.selectQuantity && (
            <SelectQuantityDropDown
              product={props.product}
              itemQuantity={props.itemQuantity}
              setItemQuantity={props.setItemQuantity}
              setSelectQuantity={props.setSelectQuantity}
            />
          )}
          {!props.selectQuantity && (
            <div>
              <p>{props.itemQuantity}</p> <DownArrow />
            </div>
          )}
        </button>
        <div id="trash-can-border">
          <TrashCan />
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
