import { ReactComponent as LogoIcon } from './usb-icon.svg';

function Logo() {
    return(
        <li className='logo-nav-item'>
            <a className='logo-icon-button' href="#">
              <LogoIcon/>   
              <p id='brand-name'>Azamon</p>             
            </a>
        </li>
    );
}

export default Logo;