import React, {useContext, useEffect, useState} from "react";
import SelectQuantityDropDown from "./SelectQuantityDropDown";
import { ReactComponent as DownArrow } from "../icons/down-arrow.svg";
import { ReactComponent as TrashCan } from "../icons/trash-can.svg";
import { UserContext } from "../App.js"
import { TotalItemsInBasket, TotalPrice } from "./ShoppingBasketPage.jsx";
import { CheckedProducts } from "./ShoppingBasketPage.jsx";

const QuantitySelector = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [checkedProducts, setCheckedProducts] = useContext(CheckedProducts);
  let checkedProductsCopy = checkedProducts

  // const [totalItemsInBasket, setTotalItemsInBasket] = useContext(TotalItemsInBasket);
  // const [totalPrice, setTotalPrice] = useContext(TotalPrice);

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
  
  // function handleDelete() {
  //   console.log("handle delete is called")
  //   console.log("user before: ", user);
  //   if (checkedProductsCopy != null) {
  //     console.log("first if")
  //     if (checkedProductsCopy.length > 0) {
  //       console.log("second if")
  //       for (let i = 0; i < user.basket.length; i++) {
  //         console.log("first for loop")
  //         for (let j = 0; j < checkedProductsCopy.length; j++) {
  //           console.log("second for loop")
  //           if (user.basket[i].id === checkedProductsCopy[j]) {
  //             console.log("last if");
  //             user.basket.splice(i, 1);
  //             setUser(user);
  //             sessionStorage.setItem("user", JSON.stringify(user));
  //           }
  //         } 
  //       }
  //     }
  //   }
  //   console.log("user after: ", user);

  //   // checkedProductsCopy.push(props.product.id)
  //   // console.log("checkedProductsCopy: ",  checkedProductsCopy[0], "\n");
  //   // setCheckedProducts(checkedProductsCopy)
  // }

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
        {/* <div id="trash-can-border" onClick={handleDelete}>
          <TrashCan />
        </div> */}
      </div>
    </div>
  );
};

export default QuantitySelector;
