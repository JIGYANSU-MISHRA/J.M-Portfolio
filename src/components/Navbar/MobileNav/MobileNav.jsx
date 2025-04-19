import 'react';
import PropTypes from 'prop-types';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container" data-aos="fade-left">
                <h1 className="title">Portfolio</h1>
                <ul>
                    <li>
                        <a href="#HeroSection" className="menu-items" onClick={toggleMenu}>Home</a>
                    </li>
                    <li>
                        <a href="#Skills" className="menu-items" onClick={toggleMenu}>Skills</a>
                    </li>
                    <li>
                        <a href="#Certifications" className="menu-items" onClick={toggleMenu}>Certifications</a>
                    </li>
                    <li>
                        <a href="#Experience" className="menu-items" onClick={toggleMenu}>Experience</a>
                    </li>
                    <li>
                        <a href="#Projects" className="menu-items" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li>
                        <a href="#ContactMe" className="menu-items" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Define prop types for the component
MobileNav.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default MobileNav;