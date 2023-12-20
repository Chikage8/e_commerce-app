import Navbar from "./Navbar"
import NavItem from "./NavItem";
import Logo from './Logo.jsx';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as Mouse} from '../icons/mouse-icon.svg';
import { ReactComponent as Monitor} from '../icons/monitor-icon.svg';
import { ReactComponent as Laptop} from '../icons/laptop-icon.svg';
import { ReactComponent as Router} from '../icons/internet-router-icon.svg';
import { ReactComponent as SmartWatch} from '../icons/smartwatch-wifi-icon.svg';
import { ReactComponent as Phone } from '../icons/phone.svg';
import { ReactComponent as Tablet } from '../icons/tablet.svg';
import SearchBar from "./SearchBar.jsx";

function Header() {
    return(
        <Navbar>
            <Logo />     
            <NavItem icon={<Monitor/>} />
            <NavItem icon={<Laptop/>} />
            <NavItem icon={<Mouse/>}/>
            <NavItem icon={<Phone />} />
            <NavItem icon={<Tablet />} />
            <NavItem icon={<SmartWatch/>} />
            <NavItem icon={<Router/>} />

            <NavItem icon={<CaretIcon/>}>
                <p>Hello World</p>
            </NavItem>
            <SearchBar/>
        </Navbar>
    );
}

export default Header;