import React from "react";
import { NavLink } from "react-router-dom";

type NavItemProps = {
    to: string;
    label: string;
}

const NavBar = () => {
    return (
        <nav className="bg-transparent p-4 text-textPrimary flex justify-center">
            <ul className="flex space-x-4 items-center justify-center">
                <NavItem to="/" label="Home" />
                <NavItem to="/me" label="Me" />
                <NavItem to="/site" label="Site" />
                <NavItem to="/work" label="Work" />
            </ul>
        </nav>
    );
};

const NavItem = ({ to, label }: NavItemProps) => {
    return (
        <li className="list-none">
            <NavLink 
                to={to} 
                className={({ isActive }) => 
                    isActive ? "text-primary font-bold text-lg" : "font-normal hover:font-bold hover:text-primary"
                }
            >
                {label}
            </NavLink>
        </li>
    );
};

export default NavBar;