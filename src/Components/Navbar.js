import React, { useState } from "react";
import { Link } from "react-scroll";
import { Nav } from "react-bootstrap";
import logo from "./../img/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <Nav className={nav ? "navbar active" : "navbar"}>
            {/* <Nav className="navbar"> */}
            <div className="container">
                <div className="navbar__text">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="navbar__ul">
                        <li>
                            <Link smooth={true} duration={1000} to="#">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link smooth={true} duration={1000} to="#">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link smooth={true} duration={1000} to="#">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link smooth={true} duration={1000} to="#">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link smooth={true} duration={1000} to="#">
                                Contact{" "}
                            </Link>
                        </li>
                    </ul>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn">
                        <span className="nav-icon"></span>
                    </label>
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
