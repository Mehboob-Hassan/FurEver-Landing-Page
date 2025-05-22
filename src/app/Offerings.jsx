import { FaDog, FaDollarSign, FaWrench } from "react-icons/fa";
import { FaPersonRays } from "react-icons/fa6";

const Offerings = () => {
    return (
        <div className="offerings">
            <div className="offerings-inner">
                <div>
                    <div className="offering-icon">
                        <FaDog size={40} color="#333333" style={{ marginRight: "5px" }} />
                    </div>
                    <h3>Pet-Friendly Design</h3>
                    <p>We use safe plants, non-toxic materials, and pet-specific layouts to make sure your yard is a haven, not a hazard.</p>
                </div>
                <div>
                    <div className="offering-icon">
                        <FaDollarSign size={40} color="#333333" style={{ marginRight: "5px" }} />
                    </div>
                    <h3>Affordable Packages</h3>
                    <p>We offer transparent pricing with no surprise costs. Quality landscaping that fits your budget — and your pet’s needs.</p>
                </div>
                <div>
                    <div className="offering-icon">
                        <FaWrench size={40} color="#333333" style={{ marginRight: "5px" }} />
                    </div>
                    <h3>Easy Maintenance</h3>
                    <p>Enjoy a clean and beautiful yard without extra hassle. Our layouts are optimized for drainage, durability, and easy cleanup.</p>
                </div>
                <div>
                    <div className="offering-icon">
                        <FaPersonRays size={40} color="#333333" style={{ marginRight: "5px" }} />
                    </div>
                    <h3>Customer Focus</h3>
                    <p>Prioritizing client satisfaction with personalized, attentive service.</p>
                </div>
            </div>
        </div>
    );
}

export default Offerings;