import ProductCard from "../components/productCard";
import NavBar from "../components/navbar";
import FooterComponent from "../components/footer";
import productsHeroImg from "../assets/products_hero_3d.png";

const ProductsPage = () => {
    return (
        <div>
            <div className="home-hero">
                <img src={productsHeroImg} alt="Premium Construction Materials" className="home-hero-img" />
                <div className="home-hero-overlay"></div>
                <NavBar></NavBar>
                <div className="home-hero-content">
                    <h1 className="home-hero-heading">
                        Premium Quality.<br />
                        Lasting <span className="accent">Strength.</span>
                    </h1>
                    <div className="home-hero-divider"></div>
                    <p className="home-hero-sub">
                        Explore our range of high-performance flyash bricks, solid blocks, and paver blocks. Engineered for modern construction and sustainable development.
                    </p>
                    <div className="home-hero-btns">
                        <a href="#products-list" className="btn-primary">View Materials</a>
                    </div>
                </div>
            </div>

            <div className="stat-bar">
                <div className="stat-item">
                    <div className="stat-num">40M+</div>
                    <div className="stat-lbl">Bricks Manufactured</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">ISO</div>
                    <div className="stat-lbl">Certified Quality</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">100%</div>
                    <div className="stat-lbl">Eco-Friendly</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">24/7</div>
                    <div className="stat-lbl">Customer Support</div>
                </div>
            </div>

            <div id="products-list" className="bricksProductBlock">
                <ProductCard
                    modelSrc="/models/cementbrick.glb"
                    productName="Flyash Bricks"
                    description="Our premium flyash bricks offer excellent strength and durability, perfect for any construction project."
                    backgroundColor="black"
                    nameColor="white"
                    poster="/models/flyash-brick-poster.webp"  // optional preview image
                    availableSizes={['9"x4"x3"', '9"x9"x4"']}
                />

                <ProductCard
                    modelSrc="/models/solidblock.glb"
                    productName="Solid Block"
                    description="Our premium Solid Block offer excellent strength and durability, perfect for any construction project."
                    backgroundColor="yellow"
                    nameColor="white"
                    poster="/models/flyash-brick-poster.webp"
                    availableSizes={['4"x8"x16"', '6"x8"x16"', '8"x8"x16"']}
                />
            </div>

            <FooterComponent></FooterComponent>

        </div>


    )
}
export default ProductsPage