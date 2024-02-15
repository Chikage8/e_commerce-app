import Navbar from "./Navbar"
import NavItem from "./NavItem";
import NavMenuItem from "./NavMenuItem.jsx";
import Logo from './Logo.jsx';
import SignInMenuItem from "./SignInMenuItem.jsx";
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as Mouse} from '../icons/mouse-icon.svg';
import { ReactComponent as Monitor} from '../icons/monitor-icon.svg';
import { ReactComponent as Laptop} from '../icons/laptop-icon.svg';
import { ReactComponent as Router} from '../icons/internet-router-icon.svg';
import { ReactComponent as SmartWatch} from '../icons/smartwatch-wifi-icon.svg';
import { ReactComponent as Phone } from '../icons/phone.svg';
import { ReactComponent as Tablet } from '../icons/tablet.svg';
import { ReactComponent as LeftArrow} from '../icons/left-arrow.svg';
import SearchBar from "./SearchBar.jsx";
import React, { useContext } from "react";
import ShoppingBasketIcon from "./ShoppingBasketIcon.jsx";

function Header(props, {category, setCategoryApp}) {

    function RenderLeftArrow({addedPage}) {
        if (addedPage) {
            return <li id="added-to-basket-arrow" className="svg-container"><LeftArrow/></li>
        }
    }

    return(
        <Navbar>
            <Logo setCategoryApp={props.setCategoryApp}/>     
            <NavItem category='monitor' icon={<Monitor/>} />
            <NavItem category='laptop' icon={<Laptop/>} />
            <NavItem category='mouse' icon={<Mouse/>}/>
            <NavItem category='phone' icon={<Phone />} />
            <NavItem category='tablet' icon={<Tablet />} />
            <NavItem category='smartwatch' icon={<SmartWatch/>} />
            <NavItem category='router' icon={<Router/>} />
            <NavMenuItem icon={<CaretIcon/>}>
                <p color='white' >Hello World</p>
            </NavMenuItem>
            <SearchBar/>
            <SignInMenuItem />
            <ShoppingBasketIcon />
            <RenderLeftArrow addedPage={props.addedPage} />
        </Navbar>
    );
}

export default Header;