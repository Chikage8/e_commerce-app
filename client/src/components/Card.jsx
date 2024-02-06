import React from "react";

function Card(props) {
    
    let products = JSON.parse(localStorage.getItem('products'))
    console.log(products)

    let endpoint = "/" + props.category;

    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            <a href={props.title}>
                {console.log(props.main_image)}
                <img className="card-image" src={props.main_image} alt="product" />
            </a>
            <button className="card-interested-button">See more</button>
        </div>        
    );
}

export default Card;