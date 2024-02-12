import React from 'react'
import PropValueInfo from './PropValueInfo'

const OrderInfo = () => {
  return (
    <div className='general-info-div smaller-general-info-div'>
      <PropValueInfo prop="Ships from" value="Azamon"/>
      <PropValueInfo prop="Sold by" value="Mouse-Seller"/>
      <PropValueInfo prop="Returns" value="Eligible for Return, Refund or Replacement within 30 days of receipt"/>
      <PropValueInfo prop="Payment" value="Secure transaction"/>
      <PropValueInfo prop="Support" value="Product support included" />
    </div>
  )
}

export default OrderInfo