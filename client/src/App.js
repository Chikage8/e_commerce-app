import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import SignInPage from './components/SignInPage.jsx';

function App() {      
  return (    
    <div className='App'>      
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />}  />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
