import FooterComponent from "../components/footer";
import NavBar from "../components/navbar";
import WhyChooseUsCard from "../components/whyChooseUsCard";
import { ShieldCheck, Clock, Layers, HardHat, Users, Leaf, Flame, IndianRupee } from "lucide-react";
import homeHeroImg from "../assets/home_hero_3d.png";
import structureImg from "../assets/3dStructure.png";

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
                        icon={<ShieldCheck size={32} />}
                        title="Proven Quality"
                        description="At SMT Infrastructure, quality is never compromised. Our paver blocks, flyash bricks, and fire safety products are manufactured to meet stringent industry standards, ensuring long-lasting strength, durability, and reliability for every project we undertake."
                    />
                    <WhyChooseUsCard
                        icon={<Clock size={32} />}
                        title="On-Time Delivery"
                        description="We understand that delays cost money. That's why SMT Infrastructure plans every project meticulously and executes with precision — ensuring your construction, paver block installation, and road works are completed on schedule, every time."
                    />
                    <WhyChooseUsCard
                        icon={<Layers size={32} />}
                        title="End-to-End Service"
                        description="From supplying premium materials to professional installation and road works, SMT Infrastructure is your single, trusted partner for all infrastructure needs. No juggling multiple vendors — we handle it all, start to finish."
                    />
                    <WhyChooseUsCard
                        icon={<HardHat size={32} />}
                        title="Expert Craftsmanship"
                        description="Our team brings years of hands-on experience in paver block installation, road construction, and large-scale building projects. Every task is carried out with skilled precision, ensuring the finished result looks great and performs even better."
                    />
                    <WhyChooseUsCard
                        icon={<Users size={32} />}
                        title="Customer-First Approach"
                        description="At SMT Infrastructure, every client matters. We listen carefully to your requirements, plan around your vision, and deliver solutions tailored to your project — whether it's a residential layout, commercial complex, or municipal road development."
                    />
                    <WhyChooseUsCard
                        icon={<Leaf size={32} />}
                        title="Eco-Friendly & High-Performance Materials"
                        description="At SMT Infrastructure, our flyash bricks are made from industrial by-products, making them an eco-friendly and cost-effective choice for modern construction. With excellent thermal insulation, uniform strength, a smooth finish, and natural fire and water resistance, these bricks deliver superior performance while keeping your building safe, comfortable, and sustainable for years to come."
                    />
                    <WhyChooseUsCard
                        icon={<Flame size={32} />}
                        title="Fire Safety Expertise"
                        description="Safety is non-negotiable. SMT Infrastructure supplies and installs certified fire safety solutions that protect lives and property while meeting all regulatory compliance requirements — giving you complete peace of mind."
                    />
                    <WhyChooseUsCard
                        icon={<IndianRupee size={32} />}
                        title="Competitive Pricing"
                        description="We believe great infrastructure shouldn't break the bank. SMT Infrastructure offers premium-quality products and services at fair, transparent pricing — no hidden charges, no surprises. Just honest value for every rupee you invest."
                    />
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default Homepage;