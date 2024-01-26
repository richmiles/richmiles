import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/me">Me</Link></li>
                <li><Link to="/site">Site</Link></li>
                <li><Link to="/work">Work</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;