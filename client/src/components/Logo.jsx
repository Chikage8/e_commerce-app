import { ReactComponent as LogoIcon } from './usb-icon.svg';
import React from 'react';

function Logo(props) {
    let className;

    if (props.className !== undefined)
    {
        className = props.className;
    }

    function handleClick() {    
        localStorage.setItem('category', JSON.stringify('all'))
        // if (props.setCategoryApp !== undefined)    
        // {
        //     props.setCategoryApp('all');
        // }
    }

    return(
        <div className={className} >
            <li className='logo-nav-item'>
                <a className='logo-icon-button' href="/" onClick={handleClick}>
                    <LogoIcon/>   
                    <p id='brand-name'>Azamon</p>             
                </a>
            </li>
        </div>
    );
}

export default Logo;