import FooterComponent from "../components/footer";
import NavBar from "../components/navbar";
import WhyChooseUsCard from "../components/whyChooseUsCard";
import GoogleReviewCard from "../components/googleReviewCard";
import { ShieldCheck, Clock, Award, Handshake, Building, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import homeHeroImg1 from "../assets/home_hero_3d.png";
import structureImg from "../assets/3dStructure.png";
import GoogleMap from "../components/maps";
import clientArmstrong from "../assets/armstrong.png";
import clientDollar from "../assets/Dollar.png";
import clientSk from "../assets/Sk.png";
import clientSipcot from "../assets/sipcot.png";
import clientURC from "../assets/URc.png";
import clientISRO from "../assets/ISRO.png";
import clientAnsell from "../assets/Ansell.png";


const Homepage = () => {
    return (
        <div>
            {/* HERO SECTION */}
            <div className="home-hero">
                <img src={homeHeroImg1} alt="SMT Infrastructure Paver Blocks" className="home-hero-img" />
                <div className="home-hero-overlay"></div>
                <NavBar></NavBar>
                <div className="home-hero-content">
                    <div className="hero-trust-tag">
                        <span>●</span> Tamil Nadu's Trusted Manufacturer
                    </div>
                    <h1 className="home-hero-heading">
                        Engineering High-Strength <span className="accent">Paver Blocks.</span>
                    </h1>
                    <div className="home-hero-divider"></div>
                    <p className="home-hero-sub">
                        Precision interlocking paver blocks, eco-friendly fly ash bricks, and solid concrete materials. Engineered with heavy-duty hydraulic compaction for industrial, commercial, and residential projects across South India.
                    </p>
                    <div className="home-hero-btns">
                        <a href="/products" className="btn-primary">View Products</a>
                        <a href="/contact" className="btn-ghost">Request a Quote</a>
                    </div>
                </div>
            </div>

            {/* CREDIBILITY STATS BAR (Sri Ganapathy Pavers reference) */}
            <div className="home-stats-bar">
                <div className="home-stat-item">
                    <div className="home-stat-num">16+</div>
                    <div className="home-stat-lbl">Years Industry Leadership</div>
                </div>
                <div className="home-stat-item">
                    <div className="home-stat-num">40M+</div>
                    <div className="home-stat-lbl">Blocks & Bricks Produced</div>
                </div>
                <div className="home-stat-item">
                    <div className="home-stat-num">500+</div>
                    <div className="home-stat-lbl">Projects in Tamil Nadu</div>
                </div>
                <div className="home-stat-item">
                    <div className="home-stat-num">100%</div>
                    <div className="home-stat-lbl">Lab Tested Compressive Strength</div>
                </div>
            </div>

            {/* FEATURED PAVER PRODUCTS SHOWCASE (Sri Ganapathy Pavers reference) */}
            <div className="featured-products-section">
                <div className="featured-products-container">
                    <div className="section-header-centered">
                        <span className="section-tag-badge">PRODUCT PORTFOLIO</span>
                        <h2 className="section-main-title">Signature Paver Blocks & Bricks</h2>
                        <div className="section-title-underline"></div>
                        <p className="section-main-sub">
                            Manufactured using automated hydraulic vibration machines, high-grade stone aggregates, and superior mineral pigments for maximum load-bearing endurance.
                        </p>
                    </div>

                    <div className="featured-products-grid">
                        {/* Product 1 */}
                        <div className="featured-prod-card">
                            <div className="prod-card-header">
                                <div className="prod-badge">M30 - M50 GRADE</div>
                                <h3 className="prod-title">Interlocking Paver Blocks</h3>
                                <div className="prod-specs-tags">
                                    <span className="spec-tag">60mm / 80mm</span>
                                    <span className="spec-tag">Zig-Zag & I-Shape</span>
                                </div>
                            </div>
                            <p className="prod-desc">
                                High-density geometric interlocking pavers engineered for commercial driveways, petrol pumps, parking bays, and municipal pathways with outstanding grip.
                            </p>
                            <ul className="prod-features-list">
                                <li><CheckCircle2 size={16} /> Heavy vehicle load resistance</li>
                                <li><CheckCircle2 size={16} /> Anti-skid textured top surface</li>
                                <li><CheckCircle2 size={16} /> Colors: Red, Yellow, Charcoal, Grey</li>
                            </ul>
                            <div className="prod-card-footer">
                                <a href="/products" className="prod-card-btn">
                                    <span>Explore Specifications</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="featured-prod-card highlight-card">
                            <div className="popular-ribbon">HEAVY DUTY</div>
                            <div className="prod-card-header">
                                <div className="prod-badge accent">80mm - 100mm</div>
                                <h3 className="prod-title">Industrial Yard Pavers</h3>
                                <div className="prod-specs-tags">
                                    <span className="spec-tag">M50 High Compaction</span>
                                    <span className="spec-tag">Heavy Axle Load</span>
                                </div>
                            </div>
                            <p className="prod-desc">
                                Specialized heavy-duty blocks manufactured for container terminals, warehouse loading docks, industrial plants, and multi-axle truck transit routes.
                            </p>
                            <ul className="prod-features-list">
                                <li><CheckCircle2 size={16} /> Severe traffic & abrasion resistant</li>
                                <li><CheckCircle2 size={16} /> Resists oil, grease & chemical stains</li>
                                <li><CheckCircle2 size={16} /> Colors: Industrial Grey, Terracotta, Yellow</li>
                            </ul>
                            <div className="prod-card-footer">
                                <a href="/contact" className="prod-card-btn accent">
                                    <span>Request Factory Quote</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="featured-prod-card">
                            <div className="prod-card-header">
                                <div className="prod-badge">GREEN BUILDING</div>
                                <h3 className="prod-title">Premium Fly Ash Bricks</h3>
                                <div className="prod-specs-tags">
                                    <span className="spec-tag">9"x4"x3"</span>
                                    <span className="spec-tag">High Compressive</span>
                                </div>
                            </div>
                            <p className="prod-desc">
                                Eco-friendly, uniformly cured bricks with sharp edges and smooth plaster-saving finish, delivering exceptional thermal insulation and structural longevity.
                            </p>
                            <ul className="prod-features-list">
                                <li><CheckCircle2 size={16} /> High compressive strength</li>
                                <li><CheckCircle2 size={16} /> Low water absorption (&lt; 12%)</li>
                                <li><CheckCircle2 size={16} /> Saves 20%+ in mortar consumption</li>
                            </ul>
                            <div className="prod-card-footer">
                                <a href="/products" className="prod-card-btn">
                                    <span>Explore Specifications</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="featured-prod-card">
                            <div className="prod-card-header">
                                <div className="prod-badge">DRAINAGE & EDGING</div>
                                <h3 className="prod-title">Grass Pavers & Kerb Stones</h3>
                                <div className="prod-specs-tags">
                                    <span className="spec-tag">Eco Permeable</span>
                                    <span className="spec-tag">Precast Concrete</span>
                                </div>
                            </div>
                            <p className="prod-desc">
                                Sustainable permeable grass pavers allowing natural rainwater absorption and lawn aesthetics alongside heavy-duty boundary kerb stones for road edges.
                            </p>
                            <ul className="prod-features-list">
                                <li><CheckCircle2 size={16} /> Eco-friendly rainwater harvesting</li>
                                <li><CheckCircle2 size={16} /> Ideal for resorts, parks & modern homes</li>
                                <li><CheckCircle2 size={16} /> Durable precast kerb stones for edging</li>
                            </ul>
                            <div className="prod-card-footer">
                                <a href="/products" className="prod-card-btn">
                                    <span>Explore Specifications</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive 3D Facilities Section */}
            <div className="interactive-map-section">
                <div className="map-container">
                    <img src={structureImg} alt="SMT Infrastructure Facilities" className="map-image" />
                </div>
            </div>
            
            {/* WHY CHOOSE US (Industry Standards) */}
            <div className="home-content-section">
                <div className="section-header-centered">
                    <span className="section-tag-badge">OUR COMPETITIVE ADVANTAGE</span>
                    <h2 className="section-main-title">Why Choose SMT Infrastructure</h2>
                    <div className="section-title-underline"></div>
                </div>
                <div className="wcGridWrapper">
                    <WhyChooseUsCard
                        icon={<Award size={24} />}
                        title="High-Pressure Hydraulic Compaction"
                        description="Our automated plants utilize heavy hydraulic vibration technology ensuring uniform compaction and superior compressive strength."
                    />
                    <WhyChooseUsCard
                        icon={<ShieldCheck size={24} />}
                        title="Certified Quality Testing"
                        description="Every batch undergoes rigorous quality control for load capacity, abrasion resistance, and water absorption compliance."
                    />
                    <WhyChooseUsCard
                        icon={<Handshake size={24} />}
                        title="Transparent Factory Pricing"
                        description="Honest quotes with direct factory-to-site pricing, eliminating middlemen costs for developers and builders."
                    />
                    <WhyChooseUsCard
                        icon={<Building size={24} />}
                        title="Diverse Patterns & Colors"
                        description="Comprehensive selection of Zig-Zag, I-Shape, Hexagonal, and Solid blocks in non-fading mineral pigment hues."
                    />
                    <WhyChooseUsCard
                        icon={<Truck size={24} />}
                        title="Rapid Fleet Site Delivery"
                        description="Dedicated logistics fleet ensuring swift, undamaged delivery across Tirupur, Coimbatore, Erode, Salem, and Puducherry."
                    />
                    <WhyChooseUsCard
                        icon={<Clock size={24} />}
                        title="16+ Years Personal Accountability"
                        description="Direct founder oversight and dedicated customer support from initial sample dispatch to final site laying."
                    />
                </div>
            </div>

            {/* FULL-WIDTH QUICK ENQUIRY BANNER (Sri Ganapathy Pavers signature ribbon) */}
            <div className="home-enquiry-banner">
                <div className="enquiry-banner-inner">
                    <div className="enquiry-text-col">
                        <span className="enquiry-badge">DIRECT FACTORY SUPPLY</span>
                        <h3 className="enquiry-banner-title">
                            Looking for High-Strength Paver Blocks at Best Prices?
                        </h3>
                        <p className="enquiry-banner-sub">
                            Speak with our technical sales team for sample requests, customized block specifications, and volume discounts across Tamil Nadu & Puducherry.
                        </p>
                    </div>
                    <div className="enquiry-cta-col">
                        <a href="tel:+919942375000" className="enquiry-call-btn">
                            <span className="phone-icon-wrap">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </span>
                            <span>+91 99423 75000</span>
                        </a>
                        <a href="/contact" className="enquiry-quote-btn">Get Free Quote</a>
                    </div>
                </div>
            </div>

            {/* Our Clients Section */}
            <div className="clients-section">
                <div className="clients-container">
                    <h4 className="clients-title">Our Clients</h4>
                    <div className="clients-underline"></div>
                    <p className="clients-subtitle">
                        Trusted by leading industries, corporate giants, and government bodies for high-performance construction and infrastructure solutions.
                    </p>
                    <div className="clients-marquee">
                        <div className="clients-marquee-track">
                            {/* Group 1 */}
                            <div className="client-card">
                                <img src={clientArmstrong} alt="Armstrong" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientDollar} alt="Dollar" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientSk} alt="Sk" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientSipcot} alt="Sipcot" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientURC} alt="URc" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientISRO} alt="ISRO" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientAnsell} alt="Ansell" className="client-logo" />
                            </div>

                            {/* Group 2 (Duplicate for seamless infinite scroll) */}
                            <div className="client-card">
                                <img src={clientArmstrong} alt="Armstrong" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientDollar} alt="Dollar" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientSk} alt="Sk" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientSipcot} alt="Sipcot" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientURC} alt="URc" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientISRO} alt="ISRO" className="client-logo" />
                            </div>
                            <div className="client-card">
                                <img src={clientAnsell} alt="Ansell" className="client-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Reviews Section */}
            <div className="client-reviews-section">
                <h4 className="reviews-title">What Our Clients Say</h4>
                <div className="reviews-grid">
                    <GoogleReviewCard 
                        name="Vedavarshini B"
                        photo="https://ui-avatars.com/api/?name=Vedavarshini+B&background=0D8ABC&color=fff"
                        rating={5}
                        reviewText="Excellent service and a pleasant approach to customers. They offer top quality products at affordable prices. They deliver goods to the site quickly. A great purchasing experience. Keep it up!"
                    />
                    <GoogleReviewCard 
                        name="SANKAR MOHITH"
                        photo="https://ui-avatars.com/api/?name=SANKAR+MOHITH&background=D81B60&color=fff"
                        rating={5}
                        reviewText="I am extremely satisfied with SMT Team work. They have a very committed team & excellent service. A special thanks to SMT who always responded well to my queries and suggestions, quick response to my request are highly appreciated. Wishes you and team many successful years!"
                    />
                    <GoogleReviewCard 
                        name="Kani Kanika"
                        photo="https://ui-avatars.com/api/?name=Kani+Kanika&background=C2185B&color=fff"
                        rating={5}
                        reviewText="We are very happy that we chose SMT Flyash Bricks for our recently completed home. The service, product quality, communication, and final finish were all excellent. The bricks give a unique look to our home, and we receive many compliments. Thank you to the SMT team."
                    />
                    <GoogleReviewCard 
                        name="prabhakaran R"
                        photo="https://ui-avatars.com/api/?name=prabhakaran+R&background=512DA8&color=fff"
                        rating={5}
                        reviewText="The bricks have uniform strength and design, which enhances both safety and durability. Overall, they are reliable and suitable for long-term construction use."
                    />
                    <GoogleReviewCard 
                        name="Then Mozhi"
                        photo="https://ui-avatars.com/api/?name=Then+Mozhi&background=1976D2&color=fff"
                        rating={5}
                        reviewText="They have a wide variety of paver models and they have unique designs with affordable prices.Their commitment to work is really good. Customer friendly. The quality of paver block and laying is highly recommended. They have a huge production capacity and they can deliver the materials on time."
                    />
                </div>
            </div>

            <GoogleMap></GoogleMap>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default Homepage;