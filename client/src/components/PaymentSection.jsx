import React from 'react'
import PriceSection from './PriceSection'
import DeliverySection from './DeliverySection'
import StockInfo from './StockInfo'
import BuyButtons from './BuyButtons'
import OrderInfo from './OrderInfo'

const PaymentSection = (props) => {
  let products = JSON.parse(localStorage.getItem('products'))
  let product = products.find((prod) => prod.id == props.id)
  let current_price = (product.list_price*(1-(product.discount_percentage/100))).toFixed(2)
  let main_image = product.main_image
  return (
    <div id='payment-section-wrapper'>
        <PriceSection id={props.id} current_price={current_price}/>
        <DeliverySection id={props.id} current_price={current_price}/>
        <StockInfo />
        <BuyButtons id={props.id} current_price={current_price} main_image={main_image} />
        <OrderInfo />
    </div>
  )
}

export default PaymentSection