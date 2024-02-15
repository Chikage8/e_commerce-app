import React from 'react'
import DeselectItems from './DeselectItems'

const ShoppingBasket = () => {
  return (
    <div id='shopping-basket-container'>
        <h1 id='shopping-basket-title'>Shopping Basket</h1>
        <DeselectItems />
        <div className='end-of-line'><p>Price</p></div>
        <div className='horizontal-line'></div>
    </div>
  )
}

export default ShoppingBasket