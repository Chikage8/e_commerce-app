import React, {useEffect} from 'react';
import Header from "./Header";
import Content from "./Content";


function HomePage(props) {
    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => props.setProducts(data));
    }, [props]);
    return (
        <div>
            <Header setCategoryApp={props.setCategoryApp} />
            <Content products={props.products} category={props.category} />    
        </div>
    )
}

export default HomePage;