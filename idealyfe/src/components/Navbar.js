import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar_container">
            <img src="../../img/idealife_logo-01.png"></img>
            <ul className="navbar_menu">
                <li className="navbar_item">
                    <a href="/" className="navbar_links">Home</a>
                </li>
                <li className="navbar_item">
                    <a href="tips" className="navbar_links">Tips</a>
                </li>
                <li className="navbar_item">
                    <a href="kalkulator" className="navbar_links">Kalkulator</a>
                </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;