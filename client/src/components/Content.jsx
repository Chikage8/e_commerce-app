import Card from '../components/Card.jsx';
import React, {useState } from 'react';

function Content(props) {        
    let filteredProducts = []
    props.products.map((product, index) => {        
        if(product.category == props.category || props.category == 'all') {
            filteredProducts.push(<Card key={index} className={product.category} title={product.title} img={product.img} />)
        }
    })

    return( 
        <section className='content-section'> 
            {filteredProducts}                                                                        
        </section>        
    );
}

export default Content;