import React from 'react'
import AddToBasketButton from './AddToBasketButton'
import BuyNowButton from './BuyNowButton'

const BuyButtons = (props) => {

  return (
    <div id='buy-buttons-container'>
      <AddToBasketButton id={props.id} current_price={props.current_price} main_image={props.main_image} />
      <BuyNowButton id={props.id} current_price={props.current_price} main_image={props.main_image} />
    </div>
  )
}

export default BuyButtons