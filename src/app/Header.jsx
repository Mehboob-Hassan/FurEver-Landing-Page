import { useState } from "react";
import { FaBars, FaPaw, FaTimes } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header">
            <div className="header-icon">
                <i><FaPaw size={32} color="#f0d45c" /></i>
                <h2>FurEver</h2>
            </div>
            <div className="desktop-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button className="styled-button">Get a Free Quote</button>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(true)}>
                <FaBars size={24} />
            </div>

            
            {/* Slide Menu */}
            <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
                <div className="slide-menu-header">
                    {/* <div className="header-icon">
                        <FaPaw size={28} color="#f0d45c" />
                        <h2>FurEver</h2>
                    </div> */}
                    <FaTimes className="close-btn" size={24} onClick={() => setMenuOpen(false)} />
                </div>

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;