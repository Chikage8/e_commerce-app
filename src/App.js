import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';


function App() {
  const [category, setCategory] = useState('all');

  function setCategoryApp(value) {
    setCategory(value); 
  }

  // function showCategory(value) {
  //   return <h1> {category} </h1>;
  // }

  return (
    <div className='App'>
      <Header setCategoryApp={setCategoryApp} />
      <Content category={category} setCategoryApp={setCategoryApp} />   
    </div>
  );
}

export default App;
