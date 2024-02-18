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

    
    props.setSelectQuantity(false);
    let currentUserBasket 
    if (user.basket) {
      currentUserBasket = user.basket
    }
    
    

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
