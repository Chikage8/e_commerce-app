import React from 'react'
import PriceDisplay from './PriceDisplay'
import Header from './Header'
import BuyButtons from './BuyButtons'

const AddedToBasketPage = (props) => {

    let productsInBasketIds = []
    let productsInBasket = []

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).substring(0,6) == 'basket') {
            productsInBasketIds.push(parseInt(localStorage.key(i)[7]))
        }
    }

    let products = JSON.parse(localStorage.getItem('products'))
    for (let i = 0; i < productsInBasketIds.length; i++) {
        productsInBasket.push(products.find((prod) => prod.id == parseInt(productsInBasketIds[i])))
    }

    let recentlyAddedProduct = productsInBasket[productsInBasket.length-1]
    let current_price = (recentlyAddedProduct.list_price*(1-(recentlyAddedProduct.discount_percentage/100))).toFixed(2)

    return (
        <div id='added-to-basket-page-container'>
            <div id='added-to-basket-narrowed-page'>
                <Header addedPage={true} />
                <div id='added-to-basket-narrowed-page-cols'>
                    <div id='added-to-basket-narrowed-page-left-col'>
                        <img src={recentlyAddedProduct.main_image} alt="" />
                        <h3>Added To Cart</h3>
                    </div>
                    <div id='added-to-basket-narrowed-page-right-col'>
                        <div>Card Subtotal: <PriceDisplay price={current_price} /> </div>
                        <div>Proceed to checkout</div>
                        <div>Go to Basket</div>
                    </div>
                </div>
            </div>
            <div id='added-to-basket-new-right-col'> 
                <p>Subtotal</p>
                <h5 style={{color: "#DD5500"}}>${current_price}</h5>
                {/* <GoToCartButton/> */}
                <hr />
            </div>
        </div>
    )
}

export default AddedToBasketPage