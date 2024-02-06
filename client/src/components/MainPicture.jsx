import React from 'react'

const MainPicture = (props) => {

    let products = JSON.parse(localStorage.getItem('products'))
    let thisProduct;

    products.map((product, index) => {
        // console.log(product.id)
        // console.log(props.id)
        if (product.id == props.id) {
            console.log("product found")
            thisProduct = product
        }        
    })
    // console.log(thisProduct)

    return (
        <div id='main-picture-container'>
            <img src={thisProduct.main_image} alt="" />
        </div>
    )
}

export default MainPicture