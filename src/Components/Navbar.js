import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
    return (
        <Nav className="navbar">
            <div className="container">
                <div className="navbar__text">
                    <div className="logo">
                        <img src="/img/logo.png" alt="logo" />
                    </div>
                    {/* <ul className="navbar__ul">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contact </a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
