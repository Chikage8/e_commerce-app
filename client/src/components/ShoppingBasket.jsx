import React from 'react'
import { ReactComponent as Basket} from '../icons/shopping-basket.svg';

const ShoppingBasket = () => {

  let basketItemCount = 3;

  return (
    <div id='shoppingbasket-component-container'>
      <div id='basket-svg-container' className='svg-container'> 
        <Basket />      
      </div>
      <p> My Basket </p>
      <div id='basketItemCount-container'> 
        <div> {basketItemCount} </div>
      </div>
    </div>
  )
}

export default ShoppingBasket