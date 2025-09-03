import type { ReactNode } from "react";
import { X } from "lucide-react";
import './NavbarItem.css'

interface NavbarItemProps {
    className?: string;
    text?: string;
    href?: string;
    children?: ReactNode;
    underline?: boolean;
    backgroundEffect?: boolean;
    style?: React.CSSProperties;
    closeIcon?: boolean;
    onPress?: () => void;
}

function NavbarItem({ className, text, href, children, underline, backgroundEffect, style, onPress }: NavbarItemProps) {

    return (
        <div className={`navbar-item-wrapper ${className}`} style={style} onClick={() => {if (onPress) onPress()}}>
            <a href={href} className={`navbar-item ${underline ? 'navbar-item--underline' : ''} ${backgroundEffect ? 'background-effect' : ''}`}>
                {text && (
                    <h4 className="navbar-text">{text}</h4>
                )}
                {children}
            </a>
        </div>
    )
}

export default NavbarItem;