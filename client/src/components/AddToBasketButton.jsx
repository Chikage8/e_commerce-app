import React, { useContext, useEffect } from "react";
import { UserContext } from "../App.js"
import { useNavigate } from "react-router-dom";

const AddToBasketButton = (props) => {
  const navigate = useNavigate();

  let thisItemId = props.id

  const [user, setUser] = useContext(UserContext);
  console.log(user)

  useEffect(()=> {
    sessionStorage.setItem("user", user)
  }, [user])

  function handleClick() {
    if (typeof user === "object") {
      console.log("aa")
        if ('basket' in user) {
          // user and its basket is already set, so just add the new item to the array if its new
          console.log("bb")
          let newProd = true
          for ( let i = 0; i < user.basket.length; i++ ) {
            if(user.basket[i].id == thisItemId) {
              // Item was already in the basket, so just increase the quantity by 1
              newProd = false
              console.log("Increasing Item Quantity")
              console.log(typeof user.basket[i].quantity )
              user.basket[i].quantity = parseInt(user.basket[i].quantity) + 1
              // user.basket[i].quantity+=1
              sessionStorage.setItem("user", JSON.stringify(user))
              setUser(user)
              break
            }
          }
          if (newProd) {
            console.log("cc")
            let newProdObj = {id: thisItemId , product: props.product, current_price: props.current_price, quantity: 1}
            user.basket.push(newProdObj)
            sessionStorage.setItem("user", JSON.stringify(user))
            setUser(user)
          }
        } else {
            console.log("dd")
          // user is present but the user.basket has not yet created
          let newProdObj = {id: thisItemId , product: props.product, current_price: props.current_price, quantity: 1}
          user.basket = [newProdObj]
          sessionStorage.setItem("user", JSON.stringify(user))
          setUser(user)
          console.log(user)
        }
    } else {
      // user is not logged in
      alert("Please Log In to use your basket")
    }
    navigate("/added");
  }

  return (
    <div className="buy-button-div">
      <button id="add-to-basket-button" type="submit" onClick={handleClick}>
        Add To Basket
      </button>
    </div>
  );
};

export default AddToBasketButton;
