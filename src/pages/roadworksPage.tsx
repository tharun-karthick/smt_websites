import roadworksImage from '../assets/roadworks_background.png';
import FooterComponent from '../components/footer';
import NavBar from '../components/navbar';

const RoadWorksPage = () => {
    return (
        <>
            <div className="hero">
                <img
                    src={roadworksImage}
                    alt="3droad"
                    className="hero-img"
                />
                <div className="hero-overlay"></div>
                <NavBar></NavBar>

                <div className="hero-content">
                    {/* <div className="hero-badge">&#9679; SMT Groups</div> */}
                    <h1 className="hero-heading">
                        Building Roads.<br />
                        Building <span className="accent">Futures.</span>
                    </h1>
                    <div className="hero-divider"></div>
                    <p className="hero-sub">
                        Expert road construction, rehabilitation and surfacing — engineered for durability, precision and performance across every terrain.
                    </p>
                    <div className="hero-btns">
                        <a href="#" className="btn-primary">View Our Road Works</a>
                        <a href="#" className="btn-ghost">Get a Quote</a>
                    </div>
                </div>
            </div>

            <div className="stat-bar">
                <div className="stat-item">
                    <div className="stat-num">500+</div>
                    <div className="stat-lbl">Projects Completed</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">16+</div>
                    <div className="stat-lbl">Years Experience</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">1200km</div>
                    <div className="stat-lbl">Roads Built</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">100%</div>
                    <div className="stat-lbl">Client Satisfaction</div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </>
    )

}

export default RoadWorksPage