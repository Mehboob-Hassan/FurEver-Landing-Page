const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-content">
                <h1>Landscaping Tailored for Your Furry Friends</h1>
                <p>Pet-safe and fun outdoor spaces where your pets can play, explore, and thrive.</p>
                <div className="hero-section-buttons">
                    <button className="styled-button">Free Pet Yard Plan</button>
                    <button className="transparent-button">Call Us Now</button>
                </div>
            </div>
            <div className="hero-section-image">
                <img src="/images/hero-new.png" alt="Garden" />
                {/* <img src="/images/cat4.png" alt="Garden" /> */}

            </div>
        </div>
    );
}


export default HeroSection;