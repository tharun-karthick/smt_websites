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
                    backgroundColor="#013b19"
                    nameColor="#ffffff"
                    poster="/models/flyash-brick-poster.webp"  // optional preview image
                    availableSizes={['9"x4"x3"', '9"x9"x4"']}
                />

                <ProductCard
                    modelSrc="/models/solidblock.glb"
                    productName="Solid Block"
                    description="Our premium Solid Block offer excellent strength and durability, perfect for any construction project."
                    backgroundColor="#1e293b"
                    nameColor="#ffffff"
                    poster="/models/flyash-brick-poster.webp"
                    availableSizes={['4"x8"x16"', '6"x8"x16"', '8"x8"x16"']}
                />
            </div>

            {/* PAVER BLOCKS COLLECTION (Sri Ganapathy Pavers reference) */}
            <div className="pavers-category-section">
                <div className="section-header-centered">
                    <span className="section-tag-badge">TAMIL NADU FACTORY DIRECT</span>
                    <h2 className="pavers-category-title">Interlocking Paver Blocks & Precast Range</h2>
                    <div className="section-title-underline"></div>
                    <p className="pavers-category-sub">
                        Engineered with automated hydraulic vibration compaction, diverse geometric interlocking patterns, and non-fading pigments.
                    </p>
                </div>

                <div className="pavers-grid">
                    <div className="paver-item-card">
                        <span className="paver-tag">60MM / 80MM • M30-M50</span>
                        <h3 className="paver-name">Zig-Zag Interlocking Paver</h3>
                        <p className="paver-specs">
                            Strongest interlocking geometry. Ideal for high-movement commercial zones, petrol bunks, container depots, and private roadways.
                        </p>
                        <a href="/contact" className="paver-quote-btn">Get Price Quote</a>
                    </div>

                    <div className="paver-item-card">
                        <span className="paver-tag">60MM / 80MM • M40</span>
                        <h3 className="paver-name">I-Shape (Dumbbell) Paver</h3>
                        <p className="paver-specs">
                            Clean classic interlocking pattern. Excellent for parking bays, pedestrian avenues, university campuses, and residential layouts.
                        </p>
                        <a href="/contact" className="paver-quote-btn">Get Price Quote</a>
                    </div>

                    <div className="paver-item-card">
                        <span className="paver-tag">80MM - 100MM • HEAVY DUTY</span>
                        <h3 className="paver-name">Industrial Heavy Duty Paver</h3>
                        <p className="paver-specs">
                            Engineered for multi-axle freight traffic, warehouse terminal aprons, and industrial yards demanding maximum abrasion endurance.
                        </p>
                        <a href="/contact" className="paver-quote-btn">Get Price Quote</a>
                    </div>

                    <div className="paver-item-card">
                        <span className="paver-tag">ECO DRAINAGE & PRECAST</span>
                        <h3 className="paver-name">Grass Pavers & Kerb Stones</h3>
                        <p className="paver-specs">
                            Permeable landscaping pavers allowing lush green grass growth with natural rainwater harvesting, plus precast road kerb edging.
                        </p>
                        <a href="/contact" className="paver-quote-btn">Get Price Quote</a>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>

        </div>


    )
}
export default ProductsPage