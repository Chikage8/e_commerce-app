import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';


function App() {
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
    <div className='App'>      
      <Header setCategoryApp={setCategoryApp} />
      <Content products={serverData} category={category} />    
    </div>
  );
}

export default App;
