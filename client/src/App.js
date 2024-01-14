import './App.css';
import React, {useRef, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import SignInPage from './components/SignInPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';

function App() {      
  
  const [user, setUser] = useState(localStorage.getItem('user'));

  console.dir(JSON.stringify(user));

  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([{}]);
  
  function setCategoryApp(value) {
    setCategory(value); 
  }
 
  const setProductsApp = (value) => {
    setProducts(value);
  } 

  return (    
    <div className='App'>      
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage setCategoryApp={setCategoryApp} category={category} setProducts={setProductsApp} products={products} />}  />
          <Route path="/signin" element={<SignInPage  />} />
          <Route path="/register" element={<RegisterPage  />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
