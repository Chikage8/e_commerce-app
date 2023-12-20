import React from 'react';
import NavItem from './NavItem';

function Navbar(props) {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>{props.children}</ul>
        </nav>
    );
}

export default Navbar;
