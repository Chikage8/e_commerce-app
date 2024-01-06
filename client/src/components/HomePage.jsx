import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Content from "./Content";


function HomePage(props) {
    const [category, setCategory] = useState('all');

    function setCategoryApp(value) {
        setCategory(value); 
    }

    const [serverData, setServerData] = useState([{}]);

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => setServerData(data));
    }, []);
    return (
        <div>
            <Header setCategoryApp={setCategoryApp} />
            <Content products={serverData} category={category} />    
        </div>
    )
}

export default HomePage;