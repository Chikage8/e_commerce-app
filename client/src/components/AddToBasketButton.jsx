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
    // const objectAdditions = { quantity: e.target.textContent };
    // const currentObject = JSON.parse(
    //   localStorage.getItem(`basket/${userId}/${props.item.id}`)
    // );
    // const newObject = { ...currentObject, ...objectAdditions };
    // localStorage.setItem(
    //   `basket/${userId}/${props.item.id}`,
    //   JSON.stringify(newObject)
    // );
    if (typeof user === "object") {
      console.log("aa")
        if ('basket' in user) {
          // user and its basket is already set, so just add the new item to the array if its new
          console.log("bb")
          let newProd = true
          for ( let i = 0; i < user.basket.length; i++ ) {
            
            console.log(user.basket[i][thisItemId].quantity)
            if(Object.keys(user.basket[i])[0] == thisItemId) {
              // Item was already in the basket, so just increase the quantity by 1
              newProd = false
              console.log(user.basket[i][thisItemId])
              user.basket[i][thisItemId].quantity+=1
              sessionStorage.setItem("user", JSON.stringify(user))
              break
            }
          }
          if (newProd) {
            console.log("cc")
            let newProdObj = {[thisItemId]: {main_image: props.main_image, current_price: props.current_price, quantity: 1}}
            user.basket.push(newProdObj)
            sessionStorage.setItem("user", JSON.stringify(user))
          }
        } else {
            console.log("dd")
          // user is present but the user.basket has not yet created
          let newProdObj = {[thisItemId]: {main_image: props.main_image, current_price: props.current_price, quantity: 1}}
          user.basket = [newProdObj]
          sessionStorage.setItem("user", JSON.stringify(user))
          console.log(user)
        }
    } else {
      // user is not logged in
      alert("Please Log In to use your basket")
    }
    

    
    // props.setSelectQuantity(false);
    // let currentUserBasket 
    // if (user.basket) {
    //   currentUserBasket = user.basket
    // }
    
    

    // setUser()


    
    // console.log({
    //   main_image: props.main_image,
    //   current_price: props.current_price,
    //   quantity: 1,
    // });
    // console.log(`basket/${userId}/${thisItemId}`);
    // localStorage.setItem(
    //   `basket/${userId}/${thisItemId}`,
    //   JSON.stringify({
    //     main_image: props.main_image,
    //     current_price: props.current_price,
    //     quantity: 1,
    //   })
    // );
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
