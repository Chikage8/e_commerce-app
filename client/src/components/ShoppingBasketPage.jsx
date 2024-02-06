import React from 'react'
import Header from './Header.jsx'

const ShoppingBasketPage = () => {

  const user = localStorage.getItem('user');

  return (
    <div>
        <Header/>
        ShoppingBasketPageContent
    </div>
  )
}

export default ShoppingBasketPage