import NavbarItem from "./navbar_items/NavbarItem";
import logo_solo_wide from '../../assets/images/logo_solo_wide.png';
import { User } from 'lucide-react';

function Navbar() {

    return (
        <div id="navbar">
            <NavbarItem href="/dashboard">
                <img src={logo_solo_wide} alt="Maike Logo" id="navbar-logo" />
            </NavbarItem>
            <NavbarItem href="/drumkits" text="Drumkits" underline/>
            <NavbarItem href="/soundpacks" text="Soundpacks" underline/>
            <NavbarItem href="/loops" text="Loops" underline/>
            <NavbarItem href="/creators" text="Creators" underline/>
            <NavbarItem href="/account" backgroundEffect>
                <User className="icon"/>
            </NavbarItem>
            <NavbarItem href="/login" text="Log in" underline/>
            <NavbarItem href="/register" text="Sign up" underline/>
        </div>
    )
}

export default Navbar;