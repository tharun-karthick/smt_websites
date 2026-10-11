import FooterComponent from "../components/footer";
import NavBar from "../components/navbar";
import aboutHeroImage from "../assets/about_hero_image.png";
import { ShieldCheck, Handshake, Building, Users, Clock } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="about-page-container">
            {/* HERO SECTION */}
            <div className="hero">
                <img
                    src={aboutHeroImage}
                    alt="About SMT Infrastructure"
                    className="hero-img"
                />
                <div className="hero-overlay"></div>
                <NavBar></NavBar>

                <div className="hero-content">
                    <h1 className="hero-heading">
                        Building Trust.<br />
                        Delivering <span className="accent">Excellence.</span>
                    </h1>
                    <div className="hero-divider"></div>
                    <p className="hero-sub">
                        SMT Infrastructure is a leading force in construction and manufacturing, known for durable solutions and dependable service across paver blocks, fly ash bricks, and beyond.
                    </p>
                    <div className="hero-btns">
                        <a href="/contact" className="btn-primary">Contact Us</a>
                        <a href="/products" className="btn-ghost">View Products</a>
                    </div>
                </div>
            </div>

            {/* STATS BAR */}
            <div className="about-stats-bar">
                <div className="about-stats-container">
                    <div className="about-stat-item">
                        <div className="about-stat-num">16+</div>
                        <div className="about-stat-label">Years Experience</div>
                    </div>
                    <div className="about-stat-item">
                        <div className="about-stat-num">Micro Enterprise</div>
                        <div className="about-stat-label">FY 2023-24 Classification</div>
                    </div>
                    <div className="about-stat-item">
                        <div className="about-stat-num">100%</div>
                        <div className="about-stat-label">Personal Accountability</div>
                    </div>
                    <div className="about-stat-item">
                        <div className="about-stat-num">Premium</div>
                        <div className="about-stat-label">Quality Assured</div>
                    </div>
                </div>
            </div>

            {/* STORY & PHILOSOPHY SPLIT SECTION */}
            <div className="about-story-section">
                <div className="about-story-container">
                    <div className="about-story-grid">
                        <div className="about-story-text">
                            <h4 className="about-section-tag">OUR STORY</h4>
                            <h2 className="about-section-title">The Foundation of SMT</h2>
                            <p className="about-paragraph">
                                Operating under <strong>SMT Agencies</strong>, SMT Infrastructure has grown to become a trusted name in civil works and manufacturing. Classified as a Micro Enterprise in FY 2023–24, we take pride in our focused scale, which allows us to maintain direct leadership involvement and absolute personal accountability on every project.
                            </p>
                            <p className="about-paragraph">
                                Over the last 16+ years, we have built a reputation for excellence by producing top-tier materials and executing heavy-duty construction works. We serve industrial, commercial, and government sectors with consistent dedication.
                            </p>
                        </div>
                        <div className="about-story-quote">
                            <div className="quote-box">
                                <span className="quote-icon">“</span>
                                <p className="quote-text">
                                    We don't just build infrastructure — we build trust. Every project we deliver and block we manufacture is backed by personal accountability and durability.
                                </p>
                                <div className="quote-author">SMT Leadership Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CORE VALUES SECTION */}
            <div className="about-values-section">
                <div className="about-values-container">
                    <h4 className="about-section-tag center">OUR PRINCIPLES</h4>
                    <h2 className="about-section-title center">Values That Guide Us</h2>
                    <div className="about-values-underline"></div>
                    
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon-wrapper">
                                <ShieldCheck size={28} />
                            </div>
                            <h3>Quality Assurance</h3>
                            <p>Our manufacturing and site execution adhere to rigorous strength parameters for long-lasting integrity.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-wrapper">
                                <Handshake size={28} />
                            </div>
                            <h3>Transparency</h3>
                            <p>We foster client relationships on a foundation of open communication, accurate quotes, and honest deadlines.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-wrapper">
                                <Users size={28} />
                            </div>
                            <h3>Focused Scale</h3>
                            <p>Being a Micro Enterprise means we focus deeply on your needs, ensuring high responsiveness and detailed supervision.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-wrapper">
                                <Building size={28} />
                            </div>
                            <h3>Robust Engineering</h3>
                            <p>From base foundations to physical paver compositions, our materials are designed to resist heavy wear and weathering.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* OPERATIONAL PILLARS SECTION */}
            <div className="about-pillars-section">
                <div className="about-pillars-container">
                    <h4 className="about-section-tag center">CAPABILITIES</h4>
                    <h2 className="about-section-title center">Our Dual Operations</h2>
                    <div className="about-values-underline"></div>
                    
                    <div className="pillars-grid">
                        <div className="pillar-column manufacturing">
                            <div className="pillar-header">
                                <Building size={32} />
                                <h3>Manufacturing Division</h3>
                            </div>
                            <ul className="pillar-list">
                                <li>
                                    <strong>Premium Paver Blocks:</strong> Styled interlocking pavers in diverse patterns, load specifications, and colors.
                                </li>
                                <li>
                                    <strong>Fly Ash Bricks:</strong> Eco-friendly, uniform bricks providing exceptional insulation and high compressive strength.
                                </li>
                                <li>
                                    <strong>Fire Safety Products:</strong> Reliable fire protection equipment supplied and installed for safety compliance.
                                </li>
                            </ul>
                        </div>
                        
                        <div className="pillar-column contracting">
                            <div className="pillar-header">
                                <Clock size={32} />
                                <h3>Contracting Division</h3>
                            </div>
                            <ul className="pillar-list">
                                <li>
                                    <strong>Civil Paving:</strong> High-precision laying of heavy-duty interlocking pavers for industrial, commercial, and municipal spaces.
                                </li>
                                <li>
                                    <strong>Infrastructure Rehabilitation:</strong> Restoring surfaces, laying durable pavements, and grading civil layouts.
                                </li>
                                <li>
                                    <strong>Site Development:</strong> Excavation, leveling, grading, and comprehensive civil preparation works.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    );
};

export default AboutPage;


