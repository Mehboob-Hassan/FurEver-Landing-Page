import { FaAsterisk } from "react-icons/fa";
const WhyUs = () => {
    return (
        <div className="why-us flex-center" >
            <div className="why-us-inner">
                <div className="why-us-content">
                    <h2>Why Us</h2>
                    <h1>Our Commitment to Excellence</h1>
                    <div className="why-us-section">
                        <FaAsterisk className="why-us-section-icon" />
                        <h1>Expertise & Experience</h1>
                        <h5>With years of industry experience, our skilled team brings unparalleled knowledge and creativity to every project.</h5>
                        <div className="seperator"></div>
                    </div>
                    <div className="why-us-section">
                        <FaAsterisk className="why-us-section-icon" />
                        <h1>Customized Solutions</h1>
                        <h5>We tailor our services to meet your unique needs and vision, ensuring each outdoor space reflects your personal style.</h5>
                        <div className="seperator"></div>
                    </div>
                    <div className="why-us-section">
                        <FaAsterisk className="why-us-section-icon" />
                        <h1>Sustainable Practices</h1>
                        <h5>We prioritize eco-friendly methods and materials, fostering beautiful landscapes that respect the environment.</h5>
                    </div>
                </div>
                <div className="why-us-image flex-center">
                    <img src="/images/pet-owner.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}


export default WhyUs;