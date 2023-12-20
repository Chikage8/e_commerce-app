import Navbar from "./Navbar"
import NavItem from "./NavItem";
import Logo from './Logo.jsx';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as Mouse} from '../icons/mouse-icon.svg';
import { ReactComponent as Monitor} from '../icons/monitor-icon.svg';
import { ReactComponent as Laptop} from '../icons/laptop-icon.svg';
import { ReactComponent as Router} from '../icons/internet-router-icon.svg';
import { ReactComponent as SmartWatch} from '../icons/smartwatch-wifi-icon.svg';

function Header() {
    return(
        <Navbar>
            <Logo />     
            <NavItem icon={<Mouse/>}/>
            <NavItem icon={<Monitor/>} />
            <NavItem icon={<Laptop/>} />
            <NavItem icon={<Router/>} />
            <NavItem icon={<SmartWatch/>} />

            <NavItem icon={<CaretIcon/>}>
                <p>Hello World</p>
            </NavItem>
        </Navbar>
    );
}

export default Header;