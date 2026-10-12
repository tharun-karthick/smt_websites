import React, { useState } from "react";
import ProductCard from "../components/productCard";
import NavBar from "../components/navbar";
import FooterComponent from "../components/footer";
import productsHeroImg from "../assets/products_hero_3d.png";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ProductItem {
    id: string;
    name: string;
    category: 'bricks' | 'rubber-mould' | 'normal-paver' | 'grass-paver' | 'kerb-stone' | 'designer-tiles';
    categoryLabel: string;
    thickness: string;
    size?: string;
    badge: string;
    description: string;
    features: string[];
}

const productCatalog: ProductItem[] = [
    // ─── RUBBER MOULD PAVER BLOCKS (All from PDF) ───
    {
        id: "zigzag-paver",
        name: "Zig-Zag Interlocking Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM, 80MM & 100MM",
        badge: "HEAVY DUTY • M30-M50",
        description: "Strongest geometric interlocking matrix engineered for continuous high-torque vehicular movement and heavy freight axles.",
        features: ["Ideal for petrol pumps & container depots", "Superior mechanical multi-directional interlock", "Colors: Red, Yellow, Charcoal, Grey"]
    },
    {
        id: "cosmic-paver",
        name: "Cosmic Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        badge: "ARCHITECTURAL STAR",
        description: "Unique celestial star geometry creating an exquisite interlocking visual pattern for premium landscapes.",
        features: ["Vibrant multi-color layout options", "Perfect for luxury villas & resort courtyards", "High abrasion endurance rubber mould finish"]
    },
    {
        id: "i-shape-paver",
        name: "I-Shape (Dumbbell) Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM, 80MM",
        badge: "CLASSIC COMMERCIAL",
        description: "Classic dumbbell geometric lock delivering high horizontal shear strength for heavy parking bays and municipal avenues.",
        features: ["Universally popular interlocking pattern", "Ideal for university campuses & parking lots", "Smooth mirror finish with Chamfered edge"]
    },
    {
        id: "diamond-paver",
        name: "Diamond Shape Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        badge: "3D VISUAL EFFECT",
        description: "Rhombus diamond blocks that form striking three-dimensional cube illusions when combined in contrasting color shades.",
        features: ["Creates captivating 3D optical patterns", "Best for pedestrian plazas & showroom frontages", "Anti-skid dense surface texture"]
    },
    {
        id: "rock-arch-paver",
        name: "Rock Type Paver (Arch Type)",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        size: "12\" x 6\"",
        badge: "NATURAL ROCK FINISH",
        description: "Arch-profile pavers with deep natural split-rock texture delivering exceptional wet-weather grip and rustic charm.",
        features: ["Superior anti-slip traction for sloping driveways", "Natural quarry stone tactile appearance", "Engineered for garden paths & villa gates"]
    },
    {
        id: "cobble-stone",
        name: "Cobble Stone Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        size: "4\" x 4\"",
        badge: "EUROPEAN HERITAGE",
        description: "Compact traditional square cobble stone design reminiscent of timeless European streetscapes and walkways.",
        features: ["Classic 4x4 compact square proportions", "Enhances heritage architecture & hotel walkways", "High compressive strength aggregate matrix"]
    },
    {
        id: "key-paver",
        name: "Key Paver (Combo Paver)",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        size: "8\" x 4\" & 4\" x 4\"",
        badge: "MODULAR COMBO LOCK",
        description: "Interlocking dual-size modular system combining 8x4 and 4x4 pavers for intricate, highly rigid pavement structures.",
        features: ["Dual-element interlock prevents shifting", "Great for residential porticos & garden drives", "Available in contrasting dual-tone combinations"]
    },
    {
        id: "rectangular-paver-blocks",
        name: "Rectangular Paver Blocks",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM, 80MM & 100MM",
        size: "8\" x 5\" & 8\" x 7\"",
        badge: "INDUSTRIAL HEAVY",
        description: "Heavy-duty rectangular concrete blocks engineered for warehouse terminal aprons, port facilities, and transit corridors.",
        features: ["Available in 8x5 and 8x7 heavy duty sizes", "Resistant to grease, chemical & heavy axle loads", "Suitable for mechanical herringbone laying"]
    },
    {
        id: "rectangular-rock-finish",
        name: "Rectangular Paver (Rock Finish)",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        size: "12\" x 6\"",
        badge: "ROCK SPLIT TEXTURE",
        description: "Linear 12x6 rectangular block featuring a rugged split-rock textured top face for stately entrances and plazas.",
        features: ["Combines linear modern styling with rock texture", "Heavy vehicle load capacity", "Zero-maintenance mineral pigment finish"]
    },
    {
        id: "brick-paver",
        name: "Brick Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM, 80MM & 100MM",
        size: "8\" x 4\"",
        badge: "TIMELESS CLASSIC",
        description: "Traditional brick proportions offering versatile laying geometries including herringbone, basketweave, and running bond.",
        features: ["Standard 8x4 modular building dimension", "Multi-thickness options from 60mm to 100mm", "High durability across commercial driveways"]
    },
    {
        id: "square-paver-rubber",
        name: "Square Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        size: "8\" x 8\"",
        badge: "SYMMETRICAL GEOMETRY",
        description: "Uniform large-format square pavers for expansive patios, open seating zones, and modern architectural terraces.",
        features: ["Clean symmetrical 8x8 proportion", "Provides neat minimalist linear joints", "Pairs beautifully with contrasting border kerbs"]
    },
    {
        id: "mushroom-paver",
        name: "Mushroom (Bubble) Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        badge: "TACTILE BUBBLE RELIEF",
        description: "Distinctive bubble relief nodes offering exceptional slip resistance, sensory foot grip, and aesthetic uniqueness.",
        features: ["Tactile non-slip surface under heavy rain", "Ideal for pool perimeters, ramps & public squares", "Eye-catching decorative bubble matrix"]
    },
    {
        id: "mermaid-paver",
        name: "Mermaid Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        badge: "CURVED WAVE FORM",
        description: "Graceful undulating curved wave interlocking blocks that create flowing aquatic ribbons across landscape grounds.",
        features: ["Flowing fluid wave contours", "Perfect for water features, parks & seaside villas", "Dense hydraulic vibration compacted strength"]
    },
    {
        id: "picasso-paver",
        name: "Picasso Paver",
        category: "rubber-mould",
        categoryLabel: "Rubber Mould Paver",
        thickness: "60MM",
        badge: "CONTEMPORARY ABSTRACT",
        description: "Contemporary artistic tessellation paver designed to create bold modern statements in outdoor living courtyards.",
        features: ["Avant-garde modern design aesthetic", "Exciting multi-color combination potential", "Non-fading imported mineral pigments"]
    },

    // ─── NORMAL PAVER BLOCKS (60MM & 80MM ONLY) ───
    {
        id: "normal-zigzag",
        name: "Normal Zig-Zag Paver",
        category: "normal-paver",
        categoryLabel: "Normal Paver Block",
        thickness: "60MM & 80MM",
        badge: "HYDRAULIC COMPACTED",
        description: "High-compaction standard hydraulic pressed zig-zag paver block manufactured specifically in 60mm and 80mm thicknesses.",
        features: ["Tested compressive strength up to M50", "Economical heavy-duty roadway solution", "Widely approved for municipal & highway PWD works"]
    },
    {
        id: "normal-square",
        name: "Normal Square Paver",
        category: "normal-paver",
        categoryLabel: "Normal Paver Block",
        thickness: "60MM & 80MM",
        badge: "HEAVY STANDARD",
        description: "High-density hydraulic pressed square paver block in 60mm and 80mm thicknesses for commercial yards and walkways.",
        features: ["Uniform dimensional accuracy & sharp edges", "60mm & 80mm heavy load variants", "Fast manual or mechanical laying speed"]
    },

    // ─── GRASS PAVER BLOCKS (GIVEN SEPARATELY) ───
    {
        id: "grass-paver-block",
        name: "Grass Paver Block",
        category: "grass-paver",
        categoryLabel: "Eco Permeable Paver",
        thickness: "60MM",
        badge: "ECO PERMEABLE • RAINWATER HARVESTING",
        description: "Sustainable open-grid porous paver allowing natural lawn grass to thrive while supporting vehicle weight and rainwater absorption.",
        features: ["100% natural stormwater infiltration & drainage", "Prevents puddle formation & recharges groundwater", "Ideal for resort lawns, fire truck access & villa parking"]
    },

    // ─── KERB STONES (GIVEN SEPARATELY) ───
    {
        id: "road-kerb-stone",
        name: "Road & Highway Kerb Stone",
        category: "kerb-stone",
        categoryLabel: "Precast Kerb Stone",
        thickness: "Precast Concrete Edging",
        badge: "ROADWAY BOUNDARY CONTAINMENT",
        description: "Heavy-duty precast concrete road kerbs engineered to retain paved surfaces, resist vehicular impact, and guide stormwater runoff.",
        features: ["Prevents lateral pavement shifting & base failure", "Chamfered top edge for vehicle safety", "Conforms strictly to highway & municipal specifications"]
    },
    {
        id: "pathway-kerb-stone",
        name: "Pathway & Garden Kerb Stone",
        category: "kerb-stone",
        categoryLabel: "Precast Kerb Stone",
        thickness: "Pedestrian Boundary Edging",
        badge: "LANDSCAPE EDGING",
        description: "Architectural precast concrete borders designed to neatly separate garden lawns, paver pedestrian avenues, and parking lanes.",
        features: ["Crisp architectural boundaries for landscape layouts", "Durable against lawnmowers and weather erosion", "Available in natural concrete grey & terracotta tints"]
    },

    // ─── DESIGNER TILES (ALL FROM PDF) ───
    {
        id: "corwin-tile",
        name: "Corwin Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "ARCHITECTURAL PORCH",
        description: "Sophisticated designer tile featuring fine tactile textures and non-fading pigments for premium house entrances and porticos.",
        features: ["22-24mm dense high-strength matrix", "Smooth slip-resistant surface for sit-outs", "Easy to wash & maintain"]
    },
    {
        id: "escort-tile",
        name: "Escort Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "CONTEMPORARY MATT",
        description: "Refined geometric designer tile with structured matt micro-textures ensuring elegant aesthetics and secure footing.",
        features: ["Contemporary exterior architectural styling", "High abrasion resistance under daily foot traffic", "Stain & weather resistant mineral coating"]
    },
    {
        id: "track-tile",
        name: "Track Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "DIRECTIONAL GROOVES",
        description: "Modern linear groove track tile providing directional guidance, enhanced vehicle tire grip, and water channelling.",
        features: ["Linear traction grooves for ramps & porticos", "22mm - 24mm robust thickness", "Excellent anti-skid safety performance"]
    },
    {
        id: "metro-link-tile",
        name: "Metro Link Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "URBAN MATRIX",
        description: "Geometric linked motif that creates an interconnected urban mesh pattern across modern residential and commercial entryways.",
        features: ["Modern urban linked pattern", "Ideal for apartment building corridors & verandas", "Low water absorption & long-lasting polish"]
    },
    {
        id: "majestic-t-tile",
        name: "Majestic-T Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "ROYAL TEXTURED FINISH",
        description: "Majestic series textured designer exterior tile offering royal appeal with dense compaction for luxury villas and corporate offices.",
        features: ["Deep architectural surface relief", "Resists cracking under harsh tropical sunlight", "Pairs seamlessly with Majestic-R borders"]
    },
    {
        id: "majestic-r-tile",
        name: "Majestic-R Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "ROYAL RELIEF PATTERN",
        description: "Companion relief designer tile in the Majestic collection providing complementary border lines and contrasting accent insets.",
        features: ["Harmonious companion pattern to Majestic-T", "Superior mineral pigment saturation", "Slip-resistant finish in all weather"]
    },
    {
        id: "emperor-t-step",
        name: "Emperor-T (Step Tile)",
        category: "designer-tiles",
        categoryLabel: "Specialized Step Tile",
        thickness: "22MM to 24MM",
        badge: "OUTDOOR STAIR TREAD",
        description: "Heavy-duty specialized step tread tile with built-in safety bullnose profiling and textured tread ridges for outdoor staircases.",
        features: ["Specially engineered for outdoor stair treads", "Anti-fall tactile grip ridges", "Eliminates dangerous slippery stairway edges"]
    },
    {
        id: "emperor-r-step",
        name: "Emperor-R (Step Tile)",
        category: "designer-tiles",
        categoryLabel: "Specialized Step Tile",
        thickness: "22MM to 24MM",
        badge: "OUTDOOR STAIR RISER",
        description: "Matching step riser companion tile for the Emperor collection to deliver complete architectural consistency on entrance stairs.",
        features: ["Matches Emperor-T step treads perfectly", "Clean flush riser dimensions", "Resists scuffs, shoe impact & moisture"]
    },
    {
        id: "terra-zone-tile",
        name: "Terra Zone Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "EARTHEN TEXTURE",
        description: "Warm earthy tones inspired by natural terracotta, bringing biological warmth to open courtyards, sit-outs, and farmhouses.",
        features: ["Rich earthen aesthetic without terracotta fragility", "High concrete load strength & low porosity", "Cool underfoot during hot summer days"]
    },
    {
        id: "magna-tile",
        name: "Magna Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "HEAVY WEAR RESISTANCE",
        description: "High-density exterior tile engineered for areas demanding severe abrasion resistance like commercial parking walkways.",
        features: ["Engineered for heavy footfall & car parking", "Precision interlocking surface joints", "Stain and oil resistant surface seal"]
    },
    {
        id: "granito-tile",
        name: "Granito Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "GRANITE PARTICLE LOOK",
        description: "Natural speckled granite aesthetic offering the prestige and dignity of polished granite at precast factory affordability.",
        features: ["Natural speckled stone visual effect", "Perfect for porticos, balconies & verandas", "Zero chipping & long-lasting coloration"]
    },
    {
        id: "spera-tile",
        name: "Spera Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "SPHERICAL ACCENTS",
        description: "Concentric circular embossed motifs that create hypnotic ripples of shadow and light across expansive open patios.",
        features: ["Embossed concentric circular contours", "Dynamic visual play of sunlight and shadow", "Dense weather-sealed cementitious matrix"]
    },
    {
        id: "rockstar-tile",
        name: "Rockstar Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "BOLD ROCK RELIEF",
        description: "Bold chiselled rock relief for rustic elevations, open garden verandas, and luxury terrace lounges.",
        features: ["Heavy chiseled rock topography", "Robust non-skid surface for wet exterior zones", "Authentic quarried stone atmosphere"]
    },
    {
        id: "orbit-tile",
        name: "Orbit Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "FUTURISTIC GEOMETRY",
        description: "Futuristic orbital circular patterns that bring depth, motion, and contemporary flair to outdoor entertaining decks.",
        features: ["Circular orbital geometric symmetry", "Enhances modern minimalist architecture", "22-24mm thickness for enduring resilience"]
    },
    {
        id: "new-wave-tile",
        name: "New Wave Designer Tile",
        category: "designer-tiles",
        categoryLabel: "Designer Tile",
        thickness: "22MM to 24MM",
        badge: "DYNAMIC WAVE RELIEF",
        description: "Rhythmic wave contours that accentuate outdoor landscape spaces and reflect beautiful light textures throughout the day.",
        features: ["Graceful rhythmic undulating wave design", "Comfortable slip-resistant barefoot walking", "Available in natural grey, terracotta & custom colors"]
    }
];

const ProductsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories = [
        { id: "all", label: "All Materials", count: productCatalog.length + 2 },
        { id: "bricks", label: "Flyash Bricks & Blocks", count: 2 },
        { id: "rubber-mould", label: "Rubber Mould Pavers", count: productCatalog.filter(p => p.category === 'rubber-mould').length },
        { id: "normal-paver", label: "Normal Paver Blocks", count: productCatalog.filter(p => p.category === 'normal-paver').length },
        { id: "grass-paver", label: "Grass Paver Blocks", count: productCatalog.filter(p => p.category === 'grass-paver').length },
        { id: "kerb-stone", label: "Precast Kerb Stones", count: productCatalog.filter(p => p.category === 'kerb-stone').length },
        { id: "designer-tiles", label: "Designer Tiles Range", count: productCatalog.filter(p => p.category === 'designer-tiles').length },
    ];

    const filteredProducts = selectedCategory === "all"
        ? productCatalog
        : productCatalog.filter(item => item.category === selectedCategory);

    const showBricksSection = selectedCategory === "all" || selectedCategory === "bricks";

    return (
        <div className="products-page-container">
            {/* HERO SECTION */}
            <div className="home-hero">
                <img src={productsHeroImg} alt="SMT Flyash Bricks, Paver Blocks, Designer Tiles & Kerb Stones" className="home-hero-img" />
                <div className="home-hero-overlay"></div>
                <NavBar />
                <div className="home-hero-content">
                    <div className="hero-trust-tag">
                        <span>●</span> Tamil Nadu Direct Factory Supply
                    </div>
                    <h1 className="home-hero-heading">
                        Flyash Bricks, Pavers,<br />
                        <span className="accent">Tiles &amp; Kerb Stones.</span>
                    </h1>
                    <div className="home-hero-divider"></div>
                    <p className="home-hero-sub">
                        Explore our comprehensive range of high-performance Flyash Bricks, Rubber Mould &amp; Normal Paver Blocks, Architectural Designer Tiles, and Precast Kerb Stones manufactured from Chennimalai &amp; Peruntholuvu plants.
                    </p>
                    <div className="home-hero-btns">
                        <a href="#product-catalog" className="btn-primary">Browse Catalog</a>
                        <a href="/contact" className="btn-ghost">Request Factory Quote</a>
                    </div>
                </div>
            </div>

            {/* STAT BAR */}
            <div className="stat-bar">
                <div className="stat-item">
                    <div className="stat-num">40M+</div>
                    <div className="stat-lbl">Bricks &amp; Pavers Made</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">2 Plants</div>
                    <div className="stat-lbl">Chennimalai &amp; Peruntholuvu</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">M30 - M50</div>
                    <div className="stat-lbl">Paver Strength Grades</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">+91 99405 99404</div>
                    <div className="stat-lbl">Instant Dispatch Desk</div>
                </div>
            </div>

            {/* INTERACTIVE CATEGORY FILTER BAR */}
            <div id="product-catalog" className="catalog-filter-section">
                <div className="catalog-filter-container">
                    <div className="filter-header">
                        <span className="section-tag-badge">PRODUCT CATALOG</span>
                        <h2 className="catalog-main-title">Select Material Category</h2>
                        <div className="section-title-underline"></div>
                        <p className="catalog-main-sub">
                            Browse by category to view detailed thickness specifications, sizes, compressive strengths, and applications.
                        </p>
                    </div>

                    <div className="filter-tabs-track">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`filter-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                <span>{cat.label}</span>
                                <span className="tab-count-badge">{cat.count}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3D INTERACTIVE BRICKS & BLOCKS SECTION */}
            {showBricksSection && (
                <div className="category-block-wrapper">
                    <div className="category-block-header">
                        <div className="category-tag-pill">GREEN BUILDING • IS 12894</div>
                        <h3 className="category-block-title">Fly Ash Bricks &amp; Solid Blocks (Interactive 3D)</h3>
                        <p className="category-block-desc">
                            High compressive strength, uniform edges, and superior thermal insulation. Drag to inspect interactive 3D models.
                        </p>
                    </div>

                    <div className="bricksProductBlock">
                        <ProductCard
                            modelSrc="/models/cementbrick.glb"
                            productName="Flyash Bricks"
                            description="Our eco-friendly Flyash Bricks deliver 7.5 to 12.5 N/mm² compressive strength, saving 20%+ in mortar consumption with zero breakage during site transit."
                            backgroundColor="#013b19"
                            nameColor="#ffffff"
                            poster="/models/flyash-brick-poster.webp"
                            availableSizes={['9"x4"x3"', '9"x9"x4"']}
                        />

                        <ProductCard
                            modelSrc="/models/solidblock.glb"
                            productName="Solid Block"
                            description="Our premium Solid Concrete Blocks offer maximum load-bearing structural strength and durability, perfect for load-bearing walls and foundation masonry."
                            backgroundColor="#1e293b"
                            nameColor="#ffffff"
                            poster="/models/flyash-brick-poster.webp"
                            availableSizes={['4"x8"x16"', '6"x8"x16"', '8"x8"x16"']}
                        />
                    </div>
                </div>
            )}

            {/* MAIN DYNAMIC CATALOG GRID */}
            <div className="catalog-products-wrapper">
                <div className="catalog-container">
                    
                    {/* Show category title if not bricks-only */}
                    {selectedCategory !== "bricks" && (
                        <div className="catalog-grid-header">
                            <span className="results-count-text">
                                Showing <strong>{filteredProducts.length}</strong> items in 
                                <strong> {categories.find(c => c.id === selectedCategory)?.label || "Catalog"}</strong>
                            </span>
                        </div>
                    )}

                    <div className="products-card-grid">
                        {filteredProducts.map((item) => (
                            <div key={item.id} className="catalog-item-card">
                                <div className="catalog-card-header">
                                    <div className="card-top-badges">
                                        <span className="cat-badge">{item.categoryLabel}</span>
                                        <span className="grade-badge">{item.badge}</span>
                                    </div>
                                    <h3 className="item-card-title">{item.name}</h3>
                                    
                                    <div className="item-specs-pills">
                                        <span className="spec-pill">
                                            <strong>Thickness:</strong> {item.thickness}
                                        </span>
                                        {item.size && (
                                            <span className="spec-pill size">
                                                <strong>Size:</strong> {item.size}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <p className="item-card-desc">{item.description}</p>

                                <ul className="item-features-list">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle2 size={15} className="feature-check-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="item-card-footer">
                                    <a
                                        href={`https://wa.me/919940599404?text=Hello%20SMT%20Team,%20I%20would%20like%20to%20get%20a%20factory%20quote%20for%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.thickness)})`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="item-quote-btn"
                                    >
                                        <span>Get Factory Quote</span>
                                        <ArrowRight size={15} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* DIRECT BULK ENQUIRY BANNER */}
            <div className="products-bottom-cta">
                <div className="products-cta-inner">
                    <div className="cta-left-text">
                        <span className="cta-eyebrow">CHENIMALAI &amp; PERUNTHOLUVU UNITS</span>
                        <h3>Need Custom Thickness, Colors, or Laying Service?</h3>
                        <p>Contact our plant managers directly at <strong>+91 99405 99404</strong> or <strong>+91 99423 85000</strong> for instant sample dispatch, test certificates, and site truck delivery.</p>
                    </div>
                    <div className="cta-right-btns">
                        <a href="tel:+919940599404" className="btn-primary">Call +91 99405 99404</a>
                        <a href="/contact" className="btn-ghost">Submit Online Enquiry</a>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
};

export default ProductsPage;