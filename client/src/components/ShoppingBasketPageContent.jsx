import React from 'react'
import ShoppingBasket from './ShoppingBasket'

const ShoppingBasketPageContent = () => {

  let checkedProducts = []

  return (
    <div id='basket-content-container'>
        <div id='basket-content-left-col'>
          <ShoppingBasket checkedProducts={checkedProducts}/>
        </div>
        <div id='basket-content-right-col'>

        </div>
    </div>
  )
}

export default ShoppingBasketPageContent