import FooterComponent from "../components/footer";
import NavBar from "../components/navbar";
import aboutHeroImage from "../assets/about_hero_image.png";

const AboutPage = () => {
    return (
        <div>
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
                        SMT Infrastructure is a leading force in construction and manufacturing, known for durable solutions and dependable service across road works, paver blocks, fly ash bricks, and beyond.
                    </p>
                    <div className="hero-btns">
                        <a href="/contactPage" className="btn-primary">Contact Us</a>
                        <a href="/productsPage" className="btn-ghost">View Products</a>
                    </div>
                </div>
            </div>

            <div className="whoWeAre">
                <h4>Our Story</h4>
                <p>
                    We don't just build infrastructure — we build trust. SMT Infrastructure is a leading force in construction and manufacturing, known for durable solutions and dependable service across road works, paver blocks, fire safety products, fly ash bricks, and beyond. Operating under SMT Agencies, classified as a Micro Enterprise in FY 2023–24, we take pride in our focused scale and the personal accountability it brings to every project we deliver.
                </p>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default AboutPage;

