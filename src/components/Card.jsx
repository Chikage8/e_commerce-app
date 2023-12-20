import React from "react";

function Card(props) {
    return (
        <div className="content-section">
            <div className="card">
                <h3 className="card-title">{props.title}</h3>
                <img className="card-image" src={props.img} alt="product" />
                <button className="card-interested-button">See more</button>
            </div>
        </div>
    );
}

export default Card;