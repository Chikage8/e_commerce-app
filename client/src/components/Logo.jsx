import { ReactComponent as LogoIcon } from './usb-icon.svg';

function Logo(props) {

    function handleClick() {        
        props.setCategoryApp('all');
    }

    return(
        <li className='logo-nav-item'>
            <button className='logo-icon-button' href="#" onClick={handleClick}>
              <LogoIcon/>   
              <p id='brand-name'>Azamon</p>             
            </button>
        </li>
    );
}

export default Logo;