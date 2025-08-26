import type { ReactNode } from "react";
import './NavbarItem.css'

interface NavbarItemProps {
    text?: string;
    href: string;
    children?: ReactNode;
    underline?: boolean;
    backgroundEffect?: boolean;
}

function NavbarItem({ text, href, children, underline, backgroundEffect }: NavbarItemProps) {
    return (
        <a href={href} className={`navbarItem ${underline ? 'navbarItem--underline' : ''} ${backgroundEffect ? 'backgroundEffect' : ''}`}>
            {text && (
                <h3 className="navbarText">{text}</h3>
            )}
            {children}
        </a>
    )
}

export default NavbarItem;