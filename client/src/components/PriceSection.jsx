import React from 'react'
import PriceDisplay from './PriceDisplay'

const PriceSection = (props) => {
  return (
    <div id='price-section-wrapper'>
      <h3>Buy now:</h3>  
      <PriceDisplay price={props.current_price} />
    </div>
  )
}

export default PriceSection