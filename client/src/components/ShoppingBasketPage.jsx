import React from 'react'
import Header from './Header.jsx'
import ShoppingBasketPageContent from './ShoppingBasketPageContent.jsx';

const ShoppingBasketPage = () => {

  const user = localStorage.getItem('user');

  return (
    <div>
        <Header/>
        <ShoppingBasketPageContent />
    </div>
  )
}

export default ShoppingBasketPage