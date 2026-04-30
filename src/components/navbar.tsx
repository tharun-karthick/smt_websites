import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbarContainer">
            <nav>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                    <div className="logo-box">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11" cy="11" r="10" fill="#5b3fa6" />
                            <text x="11" y="15.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Arial">M</text>
                        </svg>
                    </div>
                    <span className="logo-text">SMT Groups</span>
                </Link>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="/road-works" className={({ isActive }) => isActive ? "active" : ""}>Road Works</NavLink>
                <div className="contactContainer" style={{ marginLeft: 'auto', zIndex: 20 }}>
                    <Link to="/contact" className="letsTalkBtn">Let's Talk</Link>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;