import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                <h1 className="title">Portfolio</h1>
                    <ul>
                        <li>
                            <a className="menu-items">Home</a>
                        </li>
                        <li>
                            <a className="menu-items">Skills</a>
                        </li>
                        <li>
                            <a className="menu-items">Experience</a>
                        </li>
                        <li>
                            <a className="menu-items">Projects</a>
                        </li>
                        <li>
                            <a className="menu-items">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
