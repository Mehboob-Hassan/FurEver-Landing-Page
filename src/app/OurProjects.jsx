import { FaPaw } from "react-icons/fa";


const OurProjects = () => {

    return (
        <section className="our-projects flex-center">
            <div className="our-projects-inner">

                <div className='section-header flex-center'>
                    <div className='section-header-with-icon flex-center'>
                        <div>
                            <i><FaPaw size={15} color="#333333" /></i>
                            <span>OUR PROJECTS</span>
                        </div>
                    </div>
                    <h1>Outdoor Spaces Designed for Pets</h1>
                </div>



                <div className="our-projects-cards">
                    <div className="our-projects-card">
                        <img src="/images/dog-backyard.jpg" alt="" />
                    </div>
                    <div className="our-projects-card2 flex-center">
                        <h3>Designing Spaces with Pets in Mind</h3>
                    </div>
                    <div className="our-projects-card">
                        <img src="/images/puppy.jpeg" alt="" />
                    </div>
                </div>
                <button className='transparent-button-dark'>View All Projects &gt;</button>
            </div>
        </section>
    )

}

export default OurProjects;