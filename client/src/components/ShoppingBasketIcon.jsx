import React from 'react'
import { ReactComponent as Basket} from '../icons/shopping-basket.svg';

const ShoppingBasket = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  let userId;
  if(user) {
    userId = user.user.id
  }

  user.user.basket = []

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).substring(0,7) == `basket/`) {
      if (localStorage.key(i).split('/')[1] == userId)
        user.user.basket.push(localStorage.getItem(localStorage.key(i)))
    } 
  }

  console.log(user.user.basket)

  return (
    <div id='shoppingbasket-component-container'>
      <a href="/basket" className='clickable'>
        <div id='shopping-basket-link-container'>
          <div id='basket-svg-container' className='svg-container'> 
            <Basket />      
          </div>
          <p> My Basket </p>
          <div id='basketItemCount-container'> 
            <div> { user.user.basket.length } </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ShoppingBasket