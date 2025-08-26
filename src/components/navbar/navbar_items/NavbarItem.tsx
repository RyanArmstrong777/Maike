import type { ReactNode } from "react";
import React from "react";

interface NavbarItemProps {
    text?: string;
    href: string;
    children?: ReactNode;
}

function NavbarItem({ text, href, children }: NavbarItemProps) {
    return (
        <a href={href} className="navbarItem">
            {text}
            {children}
        </a>
    )
}

export default NavbarItem;