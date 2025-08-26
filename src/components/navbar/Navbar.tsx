import NavbarItem from "./navbar_items/NavbarItem";

function Navbar() {

    const navbarStyle: React.CSSProperties = {
        backgroundColor: "red"
    }

    return (
        <div id="navbar" style={navbarStyle}>
            <NavbarItem href={"/dashboard"}/>
        </div>
    )
}

export default Navbar;