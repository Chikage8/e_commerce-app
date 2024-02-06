import React from 'react'
import { ReactComponent as EmptyStar } from "../icons/emptyStar.svg"
import { ReactComponent as HalfStar } from "../icons/halfStar.svg"
import { ReactComponent as FullStar } from "../icons/fullStar.svg"
import PropValueInfo from './PropValueInfo'

const ProductInfo = (props) => {

  let products = JSON.parse(localStorage.getItem('products'))
  let product
  products.map((prod, index) => {
    if (prod.id == props.id) {
      product = prod
    }
  })
  let rating = product.rating  
  let detailed_title = product.detailed_title
  let review_count = product.review_count
  let list_price = product.list_price
  let discount_percentage = product.discount_percentage
  let product_brand = product.product_brand
  let color = product.color
  let fullStarCount = 0
  let halfStar = false
  let stars = []

  // document.getElementById('star-color-second-half').setAttribute('stop-color', 'white')

  products.map((product, index) => {  
      if(product.id == props.id) {
        rating = product.rating
        detailed_title = product.detailed_title
        review_count = product.review_count
        list_price = product.list_price
        discount_percentage = product.discount_percentage
        product_brand = product.product_brand
        color = product.color
      }
  })
  

  function adjustStars(rating) {
    while (rating >= 1) {
      fullStarCount+=1;
      rating-=1      
    }
    if (rating == 0) {
      halfStar = false
    } else {
      halfStar = true
    }
  }

  adjustStars(rating)
  
  for (let i = 0; i < fullStarCount; i++) {
    stars.push(<FullStar />)
  }
  if (halfStar) {
    stars.push(<HalfStar />)
  }

  let emptyCount = 5 - fullStarCount - halfStar
  for (let i = 0; i < emptyCount; i++) {
    stars.push(<EmptyStar />)
  }

  function naiveRound(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}

  return (
    <div id='product-info-container'>
      <p id='product-detailed-title'> {detailed_title} </p>
      <a id='product-brand-store-link' href="https://www.amazon.com/stores/LogitechG/page/0F4BFDF6-CD4A-4A8C-83A2-3104165D740C?ref_=ast_bln">Visit the Logitech G Store </a>
      <br />
      <div id='product-info-rating-div' >
        {rating} 
        <div id='rating-stars-div'>
          {stars}
        </div>
        <div>
          {review_count} ratings | Search this page
        </div>
      </div>
      <hr />
      <div id='price-div'>
        <div id='current-price-div'>
          <div id='discount-display-div'>-{discount_percentage}%</div> <div id='discounted-price-div'><div className='left-top-dollar-sign'>$</div>{naiveRound(list_price*(1-(discount_percentage/100)))-0.01}</div>
        </div>
        <div id='original-price-div'>
          List Price: {list_price}
        </div>
      </div>
      <div id='general-info-div'>
        <PropValueInfo prop='Brand' value='Logitech' />
      </div>
    </div>
  )
}

export default ProductInfo