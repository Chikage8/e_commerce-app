import React from 'react'
import AddToBasketButton from './AddToBasketButton'
import BuyNowButton from './BuyNowButton'

const BuyButtons = (props) => {

  return (
    <div id='buy-buttons-container'>
      <AddToBasketButton id={props.id} current_price={props.current_price} product={props.product} />
      <BuyNowButton id={props.id} current_price={props.current_price} product={props.product} />
    </div>
  )
}

export default BuyButtons