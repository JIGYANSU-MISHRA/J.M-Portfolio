// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper" data-aos="fade-down">
                <div className="nav-content">
                    <h1 className="title">.. J.M Portfolio ..</h1>
                    <ul>
                        <li>
                            <a href="#HeroSection" className="menu-items">Home</a>
                        </li>
                        <li>
                            <a href="#Skills" className="menu-items">Skills</a>
                        </li>
                        <li>
                            <a href="#Certifications" className="menu-items">Certifications</a>
                        </li>
                        <li>
                            <a href="#Experience" className="menu-items">Experience</a>
                        </li>
                        <li>
                            <a href="#Projects" className="menu-items">Projects</a>
                        </li>
                        <li>
                            <a href="#ContactMe" className="menu-items">Contact</a>
                        </li>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;