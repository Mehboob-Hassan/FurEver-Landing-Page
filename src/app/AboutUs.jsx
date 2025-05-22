import { FaCheckCircle, FaPaw } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-left">
                <div className="pet-image1">
                    <img src="/images/cat5.jpeg" alt="" />
                </div>
                <div className="pet-image2">
                    <img src="/images/cat6.jpeg" alt="" />
                </div>
            </div>
            <div className="about-us-right">
                <div className="about-us-right-inner">
                    <div className='section-header-with-icon'>
                        <i><FaPaw size={15} color="#333333" style={{ marginRight: "5px" }} /></i>
                        <span>ABOUT US</span>
                    </div>
                    <h1>Creating Safe, Joyful Yards for Pets</h1>
                    <p className="soft-text">At FurEver, we believe your backyard should be as welcoming to your pets as it is to you. We specializes in designing outdoor spaces that are not only beautiful but also safe, stimulating, and stress-free.</p>
                    <ul className='service-list'>
                        <li className='service-item'>
                            <FaCheckCircle className="check-icon" />
                            Residential Pet Landscaping
                        </li>
                        <li className='service-item'>
                            <FaCheckCircle className="check-icon" />
                            Commercial Pet Zones
                        </li>
                        <li className='service-item'>
                            <FaCheckCircle className="check-icon" />
                            Industrial Pet Facilities
                        </li>
                    </ul>
                    <button className="transparent-button-dark">Learn More &gt;</button>
                </div>

            </div>
        </div>
    )
}

export default AboutUs;