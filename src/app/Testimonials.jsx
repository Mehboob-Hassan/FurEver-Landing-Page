import { FaPaw, FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Testimonials = () => {
    return (
        <div className="testimonials flex-center">
            <div className='section-header flex-center'>
                <div className='section-header-with-icon flex-center'>
                    <div>
                        <i><FaPaw size={15} color="#333333" /></i>
                        <span>TESTIMONIALS</span>
                    </div>
                </div>
                <h1>What Our Clients Say</h1>
            </div>


            <div className="testimonial-cards">
                <div className="testimonial-card flex-center">
                    <div className="testimonial-card-inner">
                        <div className="testimonial-profile">
                            <img src="/images/client1.jpg" alt="" />
                            <div className="testimonial-info">
                                <h4>Sarah L.</h4>
                                <p>Dog Mom to Bella</p>
                            </div>
                        </div>
                        <p className="soft-text">“FurEver completely transformed our backyard into a puppy paradise! Bella now spends hours playing outside safely — and it looks amazing too.”</p>
                        <div className="testimonial-reviews">
                            <span className="stars">
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                            </span>
                            <span>
                                <FaGoogle className="google" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card flex-center">
                    <div className="testimonial-card-inner">
                        <div className="testimonial-profile">
                            <img src="/images/client2.jpg" alt="" />
                            <div className="testimonial-info">
                                <h4>Dr. Jason Patel</h4>
                                <p>Owner, Urban Vet Care</p>
                            </div>
                        </div>
                        <p className="soft-text">“As a vet clinic owner, having a clean, pet-safe outdoor zone is essential. FurEver delivered exactly what we needed — fast, clean, and professional.”</p>
                        <div className="testimonial-reviews">
                            <span className="stars">
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                            </span>
                            <span>
                                <FaGoogle className="google" />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials;