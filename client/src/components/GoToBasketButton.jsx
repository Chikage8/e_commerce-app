import React from 'react'
import { useNavigate } from "react-router-dom";

const GoToBasketButton = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/basket')
  }

  return (
    <div id='go-to-basket-button-container'>
      <button id='go-to-basket-button' onClick={handleClick}>Go To Basket</button>
    </div>
  )
}

export default GoToBasketButton


// import React from 'react'
// import { useNavigate } from "react-router-dom";

// const AddToBasketButton = (props) => {
//   const navigate = useNavigate();

//   function handleClick() {
//     localStorage.setItem(`basket/${props.id}`, {main_image: props.main_image, 
//                                                 current_price: props.current_price})
//     navigate("/added");
//   }

//   return (
//     <div className='buy-button-div'>
//         <button id='add-to-basket-button' type='submit' onClick={handleClick}>Add To Basket</button>
//     </div>
//   )
// }

// export default AddToBasketButton