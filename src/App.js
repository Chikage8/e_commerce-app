import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import NavItem from './components/NavItem.jsx';
import { ReactComponent as ClothingIcon } from './icons/clothing.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<ClothingIcon/>}/>
        <NavItem icon="😊"/>
        <NavItem icon="😊"/>        

        <NavItem icon={<CaretIcon/>}>
          <p>Hello World</p>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
