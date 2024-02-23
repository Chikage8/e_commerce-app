import React, { useContext } from 'react'
import { CheckedProducts } from './ShoppingBasketPage'

const BasketItemLeftCol = (props) => {

    const [checkedProducts, setCheckedProducts] = useContext(CheckedProducts)
    let checkedProductsCopy = checkedProducts

    console.log(props.product.id)
    
    const onCheckboxChange = (e) => {
        console.log("AAAAA")
        console.log(e.target.checked)   
        console.log(props.product.id)
        console.log(checkedProductsCopy) // SORUN BURDA
        if (e.target.checked) {
            checkedProductsCopy.push(props.product.id)
        } else {
            checkedProductsCopy.filter((product) => {
                return product !== props.product.id
            })
        }
    }
    console.log(props.product)

    return (
        <div id='basket-item-left-col'>
            <input type="checkbox" name={`shopping-basket-deselect-checkbox${props.product.id}`} id={`shopping-basket-deselect-checkbox${props.product.id}`} onChange={onCheckboxChange} />
            <img key={`${props.product.id}`} id='basket-item-img' src={props.product.main_image} alt="" /> 
        </div>
    )
}

export default BasketItemLeftCol