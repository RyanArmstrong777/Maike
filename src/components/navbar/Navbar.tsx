import NavbarItem from "./navbar_items/NavbarItem";
import logo_solo_wide from '../../assets/images/logo_solo_wide.png';
import { User, Menu, X } from 'lucide-react';
import { useState, useEffect } from "react";

function Navbar() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="navbar">
            <NavbarItem href="/dashboard">
                <img src={logo_solo_wide} alt="Maike Logo" id="navbar-logo" />
            </NavbarItem>
            <div id="navbar-items-container" style={{transform: menuIsOpen ? "translateX(0)" : "translateX(100%)"}}>
                <button className="navbar-item mobile-only background-effect navbar-icon" onClick={() => setMenuIsOpen(false)} style={{right: "var(--spacing-lg)", top: "var(--spacing-lg)"}}>
                    <X className="icon navbar-text" />
                </button>
                <NavbarItem href="/dashboard" text="Dashboard" underline onPress={() => setMenuIsOpen(false)} closeIcon />
                <NavbarItem href="/browse" text="Browse" className="mobile-only" underline/>
                <NavbarItem href="/saved" text="Saved" className="mobile-only" underline/>
                <NavbarItem href="/collections" text="Collections" className="mobile-only" underline/>
                <NavbarItem href="/downloads" text="Downloads" className="mobile-only" underline/>
                <NavbarItem href="/drumkits" text="Drumkits" underline />
                <NavbarItem href="/soundpacks" text="Soundpacks" underline/>
                <NavbarItem href="/loops" text="Loops" underline/>
                <NavbarItem href="/creators" text="Creators" underline/>
                <NavbarItem href="/pricing" text="Pricing" underline/>
                <NavbarItem href="/account" text={windowSize.width <= 800 ? "Account" : ""} backgroundEffect={windowSize.width > 800} underline={windowSize.width <= 800} style={{marginLeft: windowSize.width > 800 ? "auto" : 0}}>
                    {(windowSize.width > 800) && (
                        <User className="icon" />
                    )}
                </NavbarItem>
            </div>
            <button className="navbar-item background-effect mobile-only" onClick={() => setMenuIsOpen(true)}>
                <Menu className="icon"/>
            </button>
        </div>
    )
}

export default Navbar;