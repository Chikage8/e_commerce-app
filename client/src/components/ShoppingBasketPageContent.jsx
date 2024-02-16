import React, {useState} from 'react'
import ShoppingBasket from './ShoppingBasket'
import PriceDisplay from './PriceDisplay';

const ShoppingBasketPageContent = () => {

  let checkedProducts = []

  const user = JSON.parse(localStorage.getItem('user'));
  let userId;
  if(user) {
    userId = user.user.id
  }


  console.log(user)

  let basketItemIds = []

  // get the Ids of items in the basket
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).substring(0,7) == 'basket/') {
      localStorage.removeItem("basket/4")
      console.log(userId)
      console.log(localStorage.key(i).split('/'))
      if (userId == localStorage.key(i).split('/')[1]) {
        basketItemIds.push(parseInt(localStorage.key(i).split('/')[2]))
      }
    } 
  }

  return (
    <div id='basket-content-container'>
        <div id='basket-content-left-col'>
          <ShoppingBasket checkedProducts={checkedProducts} basketItemIds={basketItemIds} />
        </div>
        <div id='basket-content-right-col'>
          <p> Subtotal({user.user.basket ? user.user.basket.length : 0 + " "} item) </p>
          <PriceDisplay price={0} />
          <button className='checkout-button'>Proceed to checkout</button>
        </div>
    </div>
  )
}

export default ShoppingBasketPageContent