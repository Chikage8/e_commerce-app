import React, {useState} from 'react'
import DeselectItems from './DeselectItems'
import PropValueInfo from './PropValueInfo'
import QuantitySelector from './QuantitySelector'

const ShoppingBasket = () => {

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

  return (
    <div id='shopping-basket-container'>
        <h1 id='shopping-basket-title'>Shopping Basket</h1>
        <DeselectItems />
        <div className='end-of-line'><p>Price</p></div>
        <div className='horizontal-line'></div>
        <div id='shopping-basket-content'>
          <div id='shopping-basket-left-col'>
            <img src={basketProducts[0].main_image} alt="" /> 
          </div>
          <div id='shopping-basket-right-col'>
            <p id='product-detailed-title'> {basketProducts[0].detailed_title} </p>
            <div id='climate-friendly-badge-wrapper'>
              <img id='climate-friendly-badge' src="https://m.media-amazon.com/images/I/111pigi1ylL.png" alt="" />
              <p id='climate-friendly-text'>Climate Pledge Friendly</p>
            </div>
            <PropValueInfo prop='Brand' value='Logitech' />
            <PropValueInfo prop='Color' value='Black' />
            <PropValueInfo prop='Special Features' value={basketProducts[0].features} />
            <QuantitySelector selectQuantity={selectQuantity} setSelectQuantity={setSelectQuantity} quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>
    </div>
  )
}

export default ShoppingBasket