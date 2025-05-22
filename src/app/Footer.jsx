import { FaPaw } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer flex-center">
            <div className="footer-content">
                <div className="footer-menu">
                    <div className="footer-logo">
                        <i><FaPaw size={22} color="#333333" style={{ marginRight: "5px" }} /></i>
                        <h3>FurEver</h3>
                    </div>
                    <p>Where Happy Pets Meet Beautiful Yards</p>
                </div>
                <div className="footer-menu">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3>Services</h3>
                    <ul>
                        <li>Pet-Friendly Landscaping</li>
                        <li>Custom Agility Yards</li>
                        <li>Puppy Patios</li>
                        <li>Pet Garden Design</li>
                        <li>Boarding Facility Upgrades</li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3>Address</h3>
                    <p>123 Green Paw Lane, Barktown, CA </p>
                    <p><span style={{ fontWeight: "bold", color: "black" }}>Call Us:</span> (555) 123-4567  </p>
                </div>
            </div>
            <div className="after-footer">
                <div className="footer-seperator"></div>
                <div className="after-footer-content">
                    <p className="soft-text">
                        © {new Date().getFullYear()} FurEver. All Rights Reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer; 