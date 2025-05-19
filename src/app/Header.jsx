const Header = () => {
    return (
        <div className="header">
            <div><h1>FurEver</h1></div>
            <div className="header-menu">
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
        </div>
    )
}

export default Header;