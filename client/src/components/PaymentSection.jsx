import React from 'react'
import PriceSection from './PriceSection'
import DeliverySection from './DeliverySection'
import StockInfo from './StockInfo'
import BuyButtons from './BuyButtons'
import OrderInfo from './OrderInfo'
import ProductPage from './ProductPage'

const PaymentSection = (props) => {
  let products = JSON.parse(localStorage.getItem('products'))
  let product = products.find((prod) => prod.id == props.id)
  console.log("PaymentSection-> product: ", product);
  let current_price = (product.list_price*(1-(product.discount_percentage/100))).toFixed(2)
  let main_image = product.main_image
  return (
    <div id='payment-section-wrapper'>
        <PriceSection id={props.id} current_price={current_price}/>
        <DeliverySection id={props.id} current_price={current_price}/>
        <StockInfo />
        <BuyButtons id={product.id} product={product} current_price={current_price} />
        <OrderInfo />
    </div>
  )
}

export default PaymentSection