import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbarContainer">
            <nav>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }} className="navbar-brand">
                    <div className="logo-box">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11" cy="11" r="10" fill="var(--primary-brand)" />
                            <text x="11" y="15.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Arial">M</text>
                        </svg>
                    </div>
                    <span className="logo-text">SMT Paver Blocks</span>
                </Link>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink>
                <div className="contactContainer">
                    <Link to="/contact" className="letsTalkBtn" id="nav-enquiry-btn">
                        <span className="enquiry-btn-text">Enquire Now</span>
                        <span className="enquiry-btn-icon">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;