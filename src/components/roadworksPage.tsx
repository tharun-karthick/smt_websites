import roadworksImage from '../assets/ChatGPT Image Apr 24, 2026, 07_18_07 AM.png';

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
                <nav>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="logo-box">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <circle cx="11" cy="11" r="10" fill="#5b3fa6" />
                                <text x="11" y="15.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Arial">M</text>
                            </svg>
                        </div>
                        <span className="logo-text">SMT Groups</span>
                    </div>
                    <a href="#">Home</a>
                    <a href="/products">Products</a>
                    <a href="#">About</a>
                    <a href="#" className="active">Road Works</a>
                </nav>

                <div className="hero-content">
                    <div className="hero-badge">&#9679; SMT Groups</div>
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
                    <div className="stat-num">18+</div>
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
        </>
    )

}

export default RoadWorksPage