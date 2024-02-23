import React, {useContext} from "react";
import SelectQuantityDropDown from "./SelectQuantityDropDown";
import { ReactComponent as DownArrow } from "../icons/down-arrow.svg";
import { ReactComponent as TrashCan } from "../icons/trash-can.svg";
import { UserContext } from "../App.js"

const QuantitySelector = (props) => {
  const [user, setUser] = useContext(UserContext)
  let userId;
  if (user) {
    userId = user.id;
  }

  // Get the quantity for the item
  let quantity;
 
  if (user && user.basket) { // check against errors
    for (let i = 0; i < user.basket; i++) {
      if (user.basket[i].id !== props.product.id) {
        continue
      } else { // item in basket matches this product
        quantity = user.basket[i].basket
      }
    }

  }

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
          {" "}
          {props.selectQuantity && (
            <SelectQuantityDropDown
              item={props.item}
              setQuantity={props.setQuantity}
              setSelectQuantity={props.setSelectQuantity}
            />
          )}{" "}
          {!props.selectQuantity && (
            <div>
              <p>{quantity}</p> <DownArrow />
            </div>
          )}{" "}
        </button>
        <div id="trash-can-border">
          <TrashCan />
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
