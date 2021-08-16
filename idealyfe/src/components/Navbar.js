import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" className="navbar_logo"><img src="../../img/idealife_logo_transparentbg.png" alt="Logo"></img></Link>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <Link className="navbar_links" to="/home"><b>Home</b></Link>
                    </li>
                    <li className="navbar_item">
                        <Link className="navbar_links" to="/tips"><b>Tips</b></Link>
                    </li>
                    <li className="navbar_item">
                        <Link className="navbar_links" to="/calculator"><b>Calculator</b></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;