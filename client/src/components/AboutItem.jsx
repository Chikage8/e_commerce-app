import React from 'react'

const AboutItem = (props) => {

    let productAboutInfoLi = []

    props.productAboutInfo.forEach((info) => {
        productAboutInfoLi.push(<li>{info}</li>)
    })

    return (
        <div>
            <h4>About this item</h4>
            <ul id='about-this-item-ul'>
                {productAboutInfoLi}
            </ul>
        </div>
    )
}

export default AboutItem