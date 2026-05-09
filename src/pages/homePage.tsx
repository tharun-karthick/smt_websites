import FooterComponent from "../components/footer";
import NavBar from "../components/navbar";
import WhyChooseUsCard from "../components/whyChooseUsCard";
import GoogleReviewCard from "../components/googleReviewCard";
import { ShieldCheck, Clock, Layers, HardHat, Users, Leaf, Flame, IndianRupee, Award, Handshake, Building } from "lucide-react";
import homeHeroImg from "../assets/home_hero_3d.png";
import structureImg from "../assets/3dStructure.png";
import GoogleMap from "../components/maps";

const Homepage = () => {
    return (
        <div>
            <div className="home-hero">
                <img src={homeHeroImg} alt="SMT Infrastructure" className="home-hero-img" />
                <div className="home-hero-overlay"></div>
                <NavBar></NavBar>
                <div className="home-hero-content">
                    <h1 className="home-hero-heading">
                        Building the Future with <span className="accent">Quality.</span>
                    </h1>
                    <div className="home-hero-divider"></div>
                    <p className="home-hero-sub">
                        Premium paver blocks, robust flyash bricks, and expert road works. SMT Infrastructure is your trusted partner for high-performance construction and development.
                    </p>
                    <div className="home-hero-btns">
                        <a href="/products" className="btn-primary">View Products</a>
                        <a href="/contact" className="btn-ghost">Contact Us</a>
                    </div>
                </div>
            </div>

            {/* Interactive 3D Map Section */}
            <div className="interactive-map-section">
                <div className="map-container">
                    <img src={structureImg} alt="SMT Infrastructure Facilities" className="map-image" />
                    
                    {/* Interactive Marker for Road Works */}
                    <a href="/road-works" className="interactive-marker marker-roadworks" data-tooltip="Road Works">
                        1
                    </a>
                </div>
            </div>
            
            <div className="home-content-section">
                <h4 className="WCU-Title">Why SMT Infrastructure Development</h4>
                <div className="wcGridWrapper">
                    <WhyChooseUsCard
                        icon={<Award size={24} />}
                        title="Unmatched Expertise"
                        description="16+ years of experience with a skilled team delivering quality infrastructure solutions."
                    />
                    <WhyChooseUsCard
                        icon={<ShieldCheck size={24} />}
                        title="Quality Assurance"
                        description="Committed to premium-quality materials and reliable workmanship in every project."
                    />
                    <WhyChooseUsCard
                        icon={<Handshake size={24} />}
                        title="Transparency and Trust"
                        description="Clear communication, honest pricing, and customer-focused service from start to finish."
                    />
                    <WhyChooseUsCard
                        icon={<Building size={24} />}
                        title="Reliable Infrastructure Solutions"
                        description="Specialized in paver blocks, flyash bricks, road works, and fire safety systems."
                    />
                    <WhyChooseUsCard
                        icon={<Users size={24} />}
                        title="Personalized Approach"
                        description="Customized solutions tailored to your project requirements and budget."
                    />
                    <WhyChooseUsCard
                        icon={<Clock size={24} />}
                        title="On-Time Delivery"
                        description="We value your time and ensure projects are completed as scheduled."
                    />
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