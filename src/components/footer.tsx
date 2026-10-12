import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Frame 920_page-0001.jpg';

const FooterComponent = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-wrapper">
            <div className="footer-main">
                {/* Column 1: Company Profile & Quality Trust */}
                <div className="footer-col-1">
                    <img src={logo} alt="SMT Logo" className="footer-logo" />
                    <p className="footer-desc">
                        SMT Infrastructure is a leading manufacturer in Tamil Nadu, producing high-compressive Flyash Bricks, Rubber Mould &amp; Interlocking Paver Blocks, Designer Tiles, and Precast Kerb Stones engineered for lifelong durability.
                    </p>
                    <div className="footer-badges">
                        <span className="footer-badge">
                            <span className="badge-dot">●</span> 16+ Years Experience
                        </span>
                        <span className="footer-badge">
                            <span className="badge-dot">●</span> ISO Compliant Quality
                        </span>
                    </div>
                </div>

                {/* Column 2: Our Products Range */}
                <div className="footer-col-2">
                    <h4 className="footer-heading">Our Products</h4>
                    <ul className="footer-links">
                        <li><Link to="/products">Flyash Bricks &amp; Solid Blocks</Link></li>
                        <li><Link to="/products">Rubber Mould Paver Blocks</Link></li>
                        <li><Link to="/products">Normal Paver Blocks (60 &amp; 80MM)</Link></li>
                        <li><Link to="/products">Designer Tiles Range</Link></li>
                        <li><Link to="/products">Grass Paver Blocks</Link></li>
                        <li><Link to="/products">Road &amp; Pathway Kerb Stones</Link></li>
                    </ul>
                </div>

                {/* Column 3: Quick Links & Company */}
                <div className="footer-col-3">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products Catalog</Link></li>
                        <li><Link to="/contact">Request a Quote</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                    </ul>
                </div>

                {/* Column 4: Manufacturing Plants & Direct Contact */}
                <div className="footer-col-4">
                    <h4 className="footer-heading">Manufacturing Units</h4>
                    <div className="footer-contact-info">
                        <div className="contact-row">
                            <span className="contact-icon" style={{ color: 'var(--accent-color)' }}>
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </span>
                            <div>
                                <span className="contact-label">Sales &amp; Dispatch:</span><br />
                                <a href="tel:+919940599404" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}>+91 99405 99404</a>
                                <span style={{ margin: '0 6px', opacity: 0.6 }}>|</span>
                                <a href="tel:+919942385000" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}>+91 99423 85000</a>
                            </div>
                        </div>

                        <div className="contact-row">
                            <span className="contact-icon" style={{ color: 'var(--accent-color)' }}>
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </span>
                            <div>
                                <strong style={{ color: 'var(--accent-color)' }}>Unit-1: SMT Flyash Bricks</strong><br />
                                D. No 58, Senthampalayam, Mukasipidariyur, Chennimalai, Tamil Nadu - 638051.
                            </div>
                        </div>

                        <div className="contact-row">
                            <span className="contact-icon" style={{ color: 'var(--accent-color)' }}>
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </span>
                            <div>
                                <strong style={{ color: 'var(--accent-color)' }}>Unit-2: SMT Bricks and Blocks</strong><br />
                                No.3/72, Post, Andipalayam, Peruntholuvu, Tamil Nadu - 641665.
                            </div>
                        </div>

                        <div className="contact-row">
                            <span className="contact-icon" style={{ color: 'var(--accent-color)' }}>
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </span>
                            <div>
                                <span className="contact-label">Email:</span><br />
                                <a href="mailto:smtflyashbricks@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>smtflyashbricks@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar with yellow accent back-to-top */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>© {new Date().getFullYear()} SMT Infrastructure. All Rights Reserved. | Flyash Bricks, Paver Blocks, Designer Tiles &amp; Kerb Stones</p>
                    <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top" title="Scroll to top">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;