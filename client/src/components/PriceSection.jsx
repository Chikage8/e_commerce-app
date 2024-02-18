import React from 'react'
import PriceDisplay from './PriceDisplay'

const PriceSection = (props) => {
  let classes = []
  return (
    <div id='price-section-wrapper'>
      <h3>Buy now:</h3>  
      <PriceDisplay price={props.current_price} classes={classes} />
    </div>
  )
}

export default PriceSection