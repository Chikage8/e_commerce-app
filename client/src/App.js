import './App.css';
import React, {useRef, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import SignInPage from './components/SignInPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import ShoppingBasketPage from './components/ShoppingBasketPage.jsx';
import MicePage from './components/ProductPage.jsx';
import ProductPage from './components/ProductPage.jsx';

function App() {      
  
  useEffect(() => {
    fetch('http://localhost:5000/')
    .then(response => response.json())
    .then(data => localStorage.setItem('products', JSON.stringify(data)));
  }, []);

  console.log(localStorage.getItem('category'))

  let products = JSON.parse(localStorage.getItem('products'))
  console.log(products)

  const [user, setUser] = useState(localStorage.getItem('user'));

  console.dir(JSON.stringify(user));

  let productRoutes = []
  JSON.parse(localStorage.getItem('products')).map((product, index) => {        
      let path = "/" + product.title
      let route = <Route key={index} path={path} element={<ProductPage id={product.id} />} />
      productRoutes.push(route)
  })

  return (    
    <div className='App'>      
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />}  />
          <Route path="/signin" element={<SignInPage  />} />
          <Route path="/register" element={<RegisterPage  />} />
          <Route path="/basket" element={<ShoppingBasketPage  />} />
          {productRoutes}
          {/* <Route path="/mouse" element={<ProductPage />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
