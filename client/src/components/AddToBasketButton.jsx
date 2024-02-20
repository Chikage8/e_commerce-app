import React, { useContext } from "react";
import { UserContext } from "../App.js"
import { useNavigate } from "react-router-dom";

const AddToBasketButton = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useContext(UserContext);
  console.log(user)

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
        if ('basket' in user) {
          // user and its basket is already set, so just add the new item to the array if its new
          let newProd = true
          let addedProdId = props.id
          for ( let i = 0; i < user.basket.length; i++ ) {
            if(Object.keys(user.basket[i])[0] == addedProdId) {
              // Item was already in the basket, so just increase the quantity by 1
              newProd = false
              user.basket[i].addedProdId.quantity += 1
              break
            }
          }
          if (newProd) {
            let newProdObj = {addedProdId: {main_image: props.main_image, current_price: props.current_price, quantity: 1}}
            user.basket.push(newProdObj)
          }
        } else {
          // user is present but the user.basket has not yet created
          let newProdObj = {addedProdId: {main_image: props.main_image, current_price: props.current_price, quantity: 1}}
          user.basket = [newProdObj]
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
    // console.log(`basket/${userId}/${props.id}`);
    // localStorage.setItem(
    //   `basket/${userId}/${props.id}`,
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
