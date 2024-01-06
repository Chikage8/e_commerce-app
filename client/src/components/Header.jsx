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
import SearchBar from "./SearchBar.jsx";

function Header(props, {category, setCategoryApp}) {
    return(
        <Navbar>
            <Logo setCategoryApp={props.setCategoryApp}/>     
            <NavItem setCategoryApp={props.setCategoryApp} category='desktop' icon={<Monitor/>} />
            <NavItem setCategoryApp={props.setCategoryApp} category='laptop' icon={<Laptop/>} />
            <NavItem setCategoryApp={props.setCategoryApp} category='mouse' icon={<Mouse/>}/>
            <NavItem setCategoryApp={props.setCategoryApp} category='phone' icon={<Phone />} />
            <NavItem setCategoryApp={props.setCategoryApp} category='tablet' icon={<Tablet />} />
            <NavItem setCategoryApp={props.setCategoryApp} category='smartwatch' icon={<SmartWatch/>} />
            <NavItem setCategoryApp={props.setCategoryApp} category='router' icon={<Router/>} />
            <NavMenuItem icon={<CaretIcon/>}>
                <p>Hello World</p>
            </NavMenuItem>
            <SearchBar/>
            <SignInMenuItem />
        </Navbar>
    );
}

export default Header;