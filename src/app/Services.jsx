import { FaPaw } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: FaPaw,
            heading: "Garden Design & Planning",
            description: "Turn your ideas into stunning outdoor realities.",
            image: "/images/pet3.jpeg"
        },
        {
            icon: FaPaw,
            heading: "Lawn Care & Maintenance",
            description: "Keep your garden vibrant and healthy year-round.",
            image: "/images/pet3.jpeg"
        },
        {
            icon: FaPaw,
            heading: "Landscape Architecture",
            description: "Enhance your landscape with beautiful patios.",
            image: "/images/pet3.jpeg"
        },
        {
            icon: FaPaw,
            heading: "Seasonal Planting Services",
            description: "Keep your garden vibrant and healthy year-round.",
            image: "/images/pet3.jpeg"
        },
    ]
    return (
        <section className="services flex-center">
            <div className="services-inner">
                <h4>OUR SERVICES</h4>
                {/* <FaPaw size={32} color="#4CAF50" /> */}
                <h1>Comprehensive Gardening and Landscaping Solutions</h1>
                <div className="service-cards">
                    {services.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="service-card">
                                {Icon ? <Icon size={32} color="#4CAF50" /> : <p>No icon</p>}
                                <h2>{item.heading}</h2>
                                <p>{item.description}</p>
                                <img src={item.image} alt={item.heading} />
                            </div>
                        );
                    })}
                </div>

                <button className='transparent-button-dark'>Explore Our Services &gt;</button>
            </div>
        </section>
    )

}

export default Services;