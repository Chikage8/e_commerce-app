import React, {useState} from 'react'
import DeselectItems from './DeselectItems'
import PropValueInfo from './PropValueInfo'
import QuantitySelector from './QuantitySelector'
import BasketItem from './BasketItem'

const ShoppingBasket = (props) => {

  let basketItemIds = []
  let basketItemDisplays = []

  // get the Ids of items in the basket
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).substring(0,7) == 'basket/') {
      basketItemIds.push(parseInt(localStorage.key(i)[7]))
    } 
  }

  let products = JSON.parse(localStorage.getItem('products')) 
  let basketProducts = [] // basket product info will be stored here

  // get the product information for the items in basket
  basketItemIds.forEach((id) => {
    products.forEach((product) => {
      if (id == product.id) {
        basketProducts.push(product)
      }
    })
  })

  const [selectQuantity, setSelectQuantity] = useState(false);
  const [quantity, setQuantity] = useState(1);

  let basketItems = []

  basketProducts.forEach((product) => {
    basketItems.push(<BasketItem key={product.id} item={product} checkedProducts={props.checkedProducts} />)
  })
  
  return (
    <div id='shopping-basket-container'>
        <h1 id='shopping-basket-title'>Shopping Basket</h1>
        <DeselectItems checkedProducts={props.checkedProducts}/>
        <div className='end-of-line'><p>Price</p></div>
        <div className='horizontal-line'></div>
        <div id='shopping-basket-content'>
          {basketItems}
        </div>
    </div>
  )
}

export default ShoppingBasket