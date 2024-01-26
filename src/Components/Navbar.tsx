import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-transparent p-4 text-textPrimary">
            <ul className="flex space-x-4">
                <NavItem to="/" label="Home" />
                <NavItem to="/me" label="Me" />
                <NavItem to="/site" label="Site" />
                <NavItem to="/work" label="Work" />
            </ul>
        </nav>
    );
};

const NavItem = ({ to, label }) => {
    return (
        <li>
            <NavLink 
                to={to} 
                className={({ isActive }) => 
                    isActive ? "text-secondary font-bold" : "font-normal hover:font-bold hover:text-textSecondary"
                }
            >
                {label}
            </NavLink>
        </li>
    );
};

export default NavBar;
