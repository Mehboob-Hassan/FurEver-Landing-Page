

const OurProjects = () => {

    return (
        <section className="our-projects flex-center">
            <div className="our-projects-inner">
                <h4>OUR PROJECTS</h4>
                {/* <FaPaw size={32} color="#4CAF50" /> */}
                <h1>Our Stunning Projects</h1>
                <div className="our-projects-cards">
                    <div className="our-projects-card">
                        <img src="/images/pet-image3.webp" alt="" />
                    </div>
                    <div className="our-projects-card2">
                        hello2
                    </div>
                    <div className="our-projects-card">
                        <img src="/images/pet-image4.webp" alt="" />
                    </div>
                </div>
                <button className='transparent-button-dark'>Explore Our Services &gt;</button>
            </div>
        </section>
    )

}

export default OurProjects;