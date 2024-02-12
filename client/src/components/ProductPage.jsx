import React, {PureComponent, useEffect} from 'react'
import Header from './Header'
import Card from './Card.jsx';
import MainPicture from './MainPicture.jsx';
import ProductInfo from './ProductInfo.jsx';
import PaymentSection from './PaymentSection.jsx';

const ProductPage = (props) => {
  return (
    <div>
        <Header />
        <div id='product-page-container'>
          {/* <AlternateImages /> */}
          <MainPicture id={props.id} />
          <ProductInfo id={props.id} />
          <PaymentSection id={props.id} />
        </div>
    </div>
  )
}

export default ProductPage