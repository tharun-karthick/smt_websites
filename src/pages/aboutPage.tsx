import React from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../components/footer";
import NavBar from "../components/navbar";
import aboutHeroImage from "../assets/about_hero_image.png";
import { ShieldCheck, Handshake, Building, Users, Clock, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <NavBar />

            {/* HERO SECTION */}
            <section className="about-hero">
                <img
                    src={aboutHeroImage}
                    alt="SMT Infrastructure Manufacturing & Construction"
                    className="about-hero-img"
                />
                <div className="about-hero-overlay"></div>

                <div className="about-hero-content">
                    <div className="about-hero-badge">
                        <span className="badge-pulse"></span>
                        <span>Tamil Nadu's Trusted Paver & Brick Manufacturer</span>
                    </div>
                    <h1 className="about-hero-heading">
                        Building Trust.<br />
                        Delivering <span className="accent">Excellence.</span>
                    </h1>
                    <div className="about-hero-divider"></div>
                    <p className="about-hero-sub">
                        SMT Infrastructure is a premier manufacturing and contracting force in Tamil Nadu, delivering high-compressive interlocking paver blocks, eco-friendly fly ash bricks, and engineered civil paving solutions.
                    </p>
                    <div className="about-hero-btns">
                        <Link to="/contact" className="btn-primary">Contact Us</Link>
                        <Link to="/products" className="btn-ghost">View Products</Link>
                    </div>
                </div>
            </section>

            {/* CREDIBILITY STATS BAR */}
            <div className="about-stats-bar">
                <div className="about-stats-container">
                    <div className="about-stat-item">
                        <div className="about-stat-num">16+</div>
                        <div className="about-stat-label">Years Industry Experience</div>
                    </div>
                    <div className="about-stat-item">
                        <div className="about-stat-num">40M+</div>
                        <div className="about-stat-label">Bricks & Pavers Produced</div>
                    </div>
                    <div className="about-stat-item">
                        <div className="about-stat-num">2 Plants</div>
                        <div className="about-stat-label">Perundurai & Puducherry</div>
                    </div>
                    <div className="about-stat-item">
                        <div className="about-stat-num">100%</div>
                        <div className="about-stat-label">Certified Quality Assured</div>
                    </div>
                </div>
            </div>

            {/* STORY & PHILOSOPHY SPLIT SECTION */}
            <section className="about-story-section">
                <div className="about-story-container">
                    <div className="about-story-grid">
                        <div className="about-story-text">
                            <span className="about-section-tag">OUR JOURNEY</span>
                            <h2 className="about-section-title">The Foundation of SMT Infrastructure</h2>
                            <div className="about-title-underline"></div>
                            <p className="about-paragraph">
                                Operating with deep industry heritage under <strong>SMT Agencies</strong>, SMT Infrastructure has grown to become a benchmark in Tamil Nadu for superior concrete materials and civil contracting works. Our focused scale empowers our leadership to maintain hands-on supervision and absolute personal accountability on every dispatch.
                            </p>
                            <p className="about-paragraph">
                                Over the last 16+ years, we have built lasting trust by engineering heavy-duty interlocking pavers, eco-conscious fly ash bricks, and delivering site execution for industrial corridors, commercial complexes, and government public infrastructure.
                            </p>
                            <div className="story-key-highlights">
                                <div className="highlight-item">
                                    <CheckCircle2 size={18} className="highlight-icon" />
                                    <span>Automated hydraulic block casting technology</span>
                                </div>
                                <div className="highlight-item">
                                    <CheckCircle2 size={18} className="highlight-icon" />
                                    <span>IS 12894 and IS 15658 compliant manufacturing</span>
                                </div>
                                <div className="highlight-item">
                                    <CheckCircle2 size={18} className="highlight-icon" />
                                    <span>Direct site transportation across Tamil Nadu & Puducherry</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-story-quote">
                            <div className="quote-box">
                                <span className="quote-icon">“</span>
                                <p className="quote-text">
                                    We don't just supply concrete materials — we lay the foundations of enduring trust. Every brick we press and every paver we cast is backed by uncompromising compressive strength and personal accountability.
                                </p>
                                <div className="quote-author-row">
                                    <div className="author-avatar">SMT</div>
                                    <div>
                                        <div className="quote-author">SMT Leadership Team</div>
                                        <div className="author-title">Perundurai & Puducherry Divisions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES SECTION */}
            <section className="about-values-section">
                <div className="about-values-container">
                    <div className="section-center-header">
                        <span className="about-section-tag">OUR PRINCIPLES</span>
                        <h2 className="about-section-title center">Values That Guide SMT</h2>
                        <div className="about-values-underline"></div>
                        <p className="section-subtitle">Core standards that govern every block manufactured and every project delivered.</p>
                    </div>
                    
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon-wrapper">
                                <ShieldCheck size={28} />
                            </div>
                            <h3>Quality Assurance</h3>
                            <p>Our casting and compaction adhere to strict laboratory strength parameters for lifelong durability under high traffic loads.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-wrapper">
                                <Handshake size={28} />
                            </div>
                            <h3>Transparency</h3>
                            <p>We nurture client partnerships on honest pricing, transparent technical test certificates, and dependable dispatch schedules.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-wrapper">
                                <Users size={28} />
                            </div>
                            <h3>Personal Accountability</h3>
                            <p>Direct leadership engagement ensures prompt customer service, custom pattern designs, and rigorous on-site supervision.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-wrapper">
                                <Building size={28} />
                            </div>
                            <h3>Robust Engineering</h3>
                            <p>From base grading to dense aggregate selection, our products are engineered to resist severe wear, weather, and heavy vehicular impact.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPERATIONAL PILLARS SECTION */}
            <section className="about-pillars-section">
                <div className="about-pillars-container">
                    <div className="section-center-header">
                        <span className="about-section-tag">OUR CAPABILITIES</span>
                        <h2 className="about-section-title center">Comprehensive SMT Divisions</h2>
                        <div className="about-values-underline"></div>
                        <p className="section-subtitle">Bridging industrial manufacturing and turnkey civil paving services.</p>
                    </div>
                    
                    <div className="pillars-grid">
                        <div className="pillar-column manufacturing">
                            <div className="pillar-header">
                                <div className="pillar-icon-box">
                                    <Building size={30} />
                                </div>
                                <div>
                                    <span className="pillar-tag">Production Division</span>
                                    <h3>Manufacturing Facilities</h3>
                                </div>
                            </div>
                            <ul className="pillar-list">
                                <li>
                                    <strong>Interlocking Paver Blocks:</strong> Heavy-duty Zig-Zag, I-Shape, Dumble, and Hexagon pavers from M30 to M50 compressive strength grades in vibrant colors.
                                </li>
                                <li>
                                    <strong>Eco Fly Ash Bricks:</strong> Thermally insulated, uniform hydraulic-pressed bricks conforming strictly to IS 12894 standards.
                                </li>
                                <li>
                                    <strong>Solid Concrete Blocks & Kerb Stones:</strong> High-density precast boundary kerb stones and building blocks engineered for modern architectural durability.
                                </li>
                                <li>
                                    <strong>Grass Paver Blocks:</strong> Permeable eco-friendly concrete turf pavers for sustainable landscaping, parking lots, and driveway drainage.
                                </li>
                            </ul>
                        </div>
                        
                        <div className="pillar-column contracting">
                            <div className="pillar-header">
                                <div className="pillar-icon-box">
                                    <Clock size={30} />
                                </div>
                                <div>
                                    <span className="pillar-tag">Execution Division</span>
                                    <h3>Contracting & Paving Services</h3>
                                </div>
                            </div>
                            <ul className="pillar-list">
                                <li>
                                    <strong>Civil Paving Execution:</strong> Laser-guided laying of heavy-duty interlocking pavers for industrial factories, warehouses, ports, and petrol pumps.
                                </li>
                                <li>
                                    <strong>Pavement Restoration:</strong> Resurfacing damaged commercial pavements, sub-base leveling, sand-bedding, and edge restraint installations.
                                </li>
                                <li>
                                    <strong>Site Infrastructure Preparation:</strong> Professional site survey, sub-grade compaction, grading, and comprehensive civil preparation.
                                </li>
                                <li>
                                    <strong>Dedicated Project Supervision:</strong> Experienced paving crew ensuring perfect alignment, seamless interlock, and vibration-compaction finishing.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Call to Action Banner */}
                    <div className="about-cta-ribbon">
                        <div className="cta-ribbon-text">
                            <h3>Ready to Build with SMT Quality?</h3>
                            <p>Contact our technical sales team for factory-direct quotes and compressive strength test certificates.</p>
                        </div>
                        <div className="cta-ribbon-actions">
                            <Link to="/contact" className="btn-cta-gold">Request Factory Quote</Link>
                            <Link to="/products" className="btn-cta-outline">Explore Materials</Link>
                        </div>
                    </div>

                </div>
            </section>

            <FooterComponent />
        </div>
    );
};

export default AboutPage;
