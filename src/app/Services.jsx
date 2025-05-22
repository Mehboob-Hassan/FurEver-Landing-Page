import { FaBroom, FaDog, FaPaw, FaTree, FaWalking } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: FaTree,
            heading: " Pet-Friendly Landscaping",
            description: "We design outdoor spaces with plants and materials, ensuring your yard is lush and green.",
            image: "/images/landscaping.jpeg"
        },
        {
            icon: FaDog,
            heading: "Custom Pet Play Zones",
            description: "Play areas with tunnels and agility features designed to suit your pets energy.",
            image: "/images/playzone.jpeg"
        },
        {
            icon: FaBroom,
            heading: "Mess-Free Lawn Solutions",
            description: "We use low-maintenance turf and strategic drainage to keep your space fresh and clean.",
            image: "/images/pet5.jpeg"
        },
        {
            icon: FaWalking,
            heading: "Paw Pathways & Access Ramps",
            description: "Install paths, ramps, and easy access points for senior or small pets.",
            image: "/images/pet-ramp.jpeg"
        },
    ]
    return (
        <section className="services flex-center">
            <div className="services-inner">

                <div className='section-header flex-center'>
                    <div className='section-header-with-icon flex-center'>
                        <div>
                            <i><FaPaw size={17} color="#333333" /></i>
                            <span>OUR SERVICES</span>
                        </div>
                    </div>
                    <h1>Tailored Landscaping for Happy Pets & Beautiful Yards</h1>
                </div>


                <div className="service-cards">
                    {services.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="service-card">
                                <span className="icon"><Icon size={30} color="#333333" /></span>
                                <h3>{item.heading}</h3>
                                <p className='soft-text'>{item.description}</p>
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