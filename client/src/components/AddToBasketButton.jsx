import React from 'react'
import { useNavigate } from "react-router-dom";

const AddToBasketButton = (props) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  let userId;
  if(user) {
    userId = user.user.id
  }


  function handleClick() {
    localStorage.setItem(`basket/${userId}/${props.id}`, {main_image: props.main_image, 
                                                current_price: props.current_price,
                                                quantity: 1})
    navigate("/added");
  }

  return (
    <div className='buy-button-div'>
        <button id='add-to-basket-button' type='submit' onClick={handleClick}>Add To Basket</button>
    </div>
  )
}

export default AddToBasketButton