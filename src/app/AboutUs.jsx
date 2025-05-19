import { FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-left">
                <div className="pet-image1">
                    <img src="/images/pet-image2.webp" alt="" />
                </div>
                <div className="pet-image2">
                    <img src="/images/pet-owner.jpeg" alt="" />
                </div>
            </div>
            <div className="about-us-right">
                <div className="about-us-right-inner">
                    <h3>ABOUT US</h3>
                    <h1>Bringing your Garden Dreams to Life</h1>
                    <p className="soft-text">With over 25 years of expertise in gardening and landscaping, we design and nurture stunning outdoor spaces tailored to your vision. From serene gardens to functional landscapes, our team is dedicated to excellence.</p>
                    <ul className='service-list'>
                        <li className='service-item'>
                            <FaCheckCircle className="check-icon" />
                            Commercial Gardening
                        </li>
                        <li className='service-item'>
                            <FaCheckCircle className="check-icon" />
                            Residential Gardening
                        </li>
                        <li className='service-item'>
                            <FaCheckCircle className="check-icon" />
                            Industrial Gardening
                        </li>
                    </ul>
                    <button className="transparent-button-dark">Learn More &gt;</button>
                </div>

            </div>
        </div>
    )
}

export default AboutUs;