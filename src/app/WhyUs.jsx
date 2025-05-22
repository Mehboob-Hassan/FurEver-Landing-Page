import { FaAsterisk, FaPaw } from "react-icons/fa";
const WhyUs = () => {
    return (
        <div className="why-us flex-center" >
            <div className="why-us-inner">
                <div className="why-us-content">
                    <div className='section-header-with-icon'>
                        <div>
                            <i><FaPaw size={20} color="#ffffff" /></i>
                            <h3>WHY US</h3>
                        </div>
                    </div>
                    <h1>We understand pets like family</h1>

                    <div className="why-us-section">
                        <FaAsterisk className="why-us-section-icon" />
                        <h3>Pet-Safe Materials</h3>
                        <p>We use non-toxic plants, paw-friendly surfaces, and durable, chew-resistant features to ensure your outdoor space is 100% pet-approved.</p>
                        <div className="seperator"></div>
                    </div>
                    <div className="why-us-section">
                        <FaAsterisk className="why-us-section-icon" />
                        <h3>Tailored to Your Space</h3>
                        <p>From small patios to large yards or commercial zones, our solutions are customized to suit your space, pet type, and lifestyle.</p>
                        <div className="seperator"></div>
                    </div>
                    <div className="why-us-section">
                        <FaAsterisk className="why-us-section-icon" />
                        <h3>Quick & Clean Installations</h3>
                        <p>Our team is efficient, respectful of your property, and leaves no mess behind. We work fast — without sacrificing quality.</p>
                    </div>
                </div>
                <div className="why-us-image flex-center">
                    <img src="/images/pet5.webp" alt="" />
                </div>
            </div>
        </div>
    )
}


export default WhyUs;