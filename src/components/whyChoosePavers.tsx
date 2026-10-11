import React from 'react';
import { Link } from 'react-router-dom';

const WhyChoosePavers = () => {
    const features = [
        {
            id: 'durable',
            title: 'Durable',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Isometric durable paver block */}
                    <polygon points="12,46 36,46 48,34 24,34" fill="#ffffff" />
                    <polygon points="12,46 24,34 24,20 12,32" fill="#ffffff" opacity="0.85" />
                    <polygon points="24,20 48,20 48,34 24,34" fill="#ffffff" opacity="0.95" />
                    {/* Impact sparks / shatter-proof shards */}
                    <polygon points="32,15 36,5 40,13" fill="#ffffff" />
                    <polygon points="22,13 26,4 28,11" fill="#ffffff" />
                    <polygon points="44,16 52,9 49,18" fill="#ffffff" />
                    <circle cx="18" cy="16" r="2" fill="#ffffff" />
                    <circle cx="54" cy="24" r="2" fill="#ffffff" />
                </svg>
            ),
        },
        {
            id: 'faster-renovation',
            title: 'Faster Renovation',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Kneeling installer laying paver block */}
                    <circle cx="36" cy="18" r="5" fill="#ffffff" />
                    <path d="M30 25 C26 27 24 33 26 38 L30 46 L36 46 L34 38 L38 34 L45 42 L49 40 L42 30 C40 26 35 24 30 25 Z" fill="#ffffff" />
                    {/* Ground and speed lines */}
                    <rect x="36" y="44" width="16" height="5" rx="1" fill="#ffffff" />
                    <line x1="12" y1="49" x2="52" y2="49" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="16" y1="42" x2="26" y2="42" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                </svg>
            ),
        },
        {
            id: 'weather-resistance',
            title: 'Weather Resistance',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Sun */}
                    <circle cx="40" cy="22" r="7" fill="#ffffff" />
                    <line x1="40" y1="10" x2="40" y2="13" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="48.5" y1="13.5" x2="46.5" y2="15.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="52" y1="22" x2="49" y2="22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Rain cloud */}
                    <path d="M22 40 C17.5 40 14 36.5 14 32 C14 28 17 24.5 21 24.1 C22.5 19.5 27 16 32 16 C37.5 16 42 20 42.5 25.5 C46.5 26 49.5 29.5 49.5 33.5 C49.5 37.5 46 40 42 40 Z" fill="#ffffff" />
                    {/* Raindrops */}
                    <line x1="22" y1="45" x2="19" y2="51" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="30" y1="45" x2="27" y2="51" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="38" y1="45" x2="35" y2="51" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            id: 'extensive-collections',
            title: 'Extensive Collections',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Circular dial of pattern dots */}
                    <circle cx="32" cy="32" r="18" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
                    {/* Surrounding collection dots */}
                    <circle cx="32" cy="17" r="2.5" fill="#ffffff" />
                    <circle cx="42.5" cy="21.5" r="2.5" fill="#ffffff" />
                    <circle cx="47" cy="32" r="2.5" fill="#ffffff" />
                    <circle cx="42.5" cy="42.5" r="2.5" fill="#ffffff" />
                    <circle cx="32" cy="47" r="2.5" fill="#ffffff" />
                    <circle cx="21.5" cy="42.5" r="2.5" fill="#ffffff" />
                    <circle cx="17" cy="32" r="2.5" fill="#ffffff" />
                    <circle cx="21.5" cy="21.5" r="2.5" fill="#ffffff" />
                    {/* Central pointer hand */}
                    <path d="M30 38 L30 26 C30 24.5 34 24.5 34 26 L34 32 L36 32 C38 32 39 34 37 36 L34 39 Z" fill="#ffffff" />
                    <circle cx="32" cy="32" r="5" stroke="#ffffff" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            id: 'eco-friendly',
            title: 'Eco-Friendly',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Hanging weight with leaf symbol */}
                    <rect x="25" y="14" width="14" height="6" rx="3" stroke="#ffffff" strokeWidth="2.5" />
                    <path d="M19 23 L45 23 C48 23 50 26 49 29 L46 47 C45 50 43 51 40 51 L24 51 C21 51 19 50 18 47 L15 29 C14 26 16 23 19 23 Z" fill="#ffffff" />
                    {/* Leaf cutout */}
                    <path d="M32 45 C32 45 39 41 39 34 C39 29 35 28 32 28 C29 28 25 29 25 34 C25 41 32 45 32 45 Z" fill="#ea580c" />
                    <path d="M32 45 L32 31" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            id: 'higher-endurance',
            title: 'Higher Endurance',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Two hands cupping sprout */}
                    <path d="M16 42 C18 46 23 48 28 47 L30 46 L27 40 L21 38 C18 37 15 39 16 42 Z" fill="#ffffff" />
                    <path d="M48 42 C46 46 41 48 36 47 L34 46 L37 40 L43 38 C46 37 49 39 48 42 Z" fill="#ffffff" />
                    {/* Sprout plant in the center */}
                    <path d="M32 44 L32 26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Left leaf */}
                    <path d="M32 32 C26 31 22 24 24 18 C29 18 33 23 32 32 Z" fill="#ffffff" />
                    {/* Right leaf */}
                    <path d="M32 28 C38 27 42 20 40 14 C35 14 31 19 32 28 Z" fill="#ffffff" />
                </svg>
            ),
        },
        {
            id: 'easy-maintenance',
            title: 'Easy Maintenance',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Circular cycle arrows */}
                    <path d="M20 25 A16 16 0 0 1 45 20" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <polyline points="42,14 47,20 41,24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M44 39 A16 16 0 0 1 19 44" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <polyline points="22,50 17,44 23,40" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    {/* Central clock */}
                    <circle cx="32" cy="32" r="7" stroke="#ffffff" strokeWidth="2" />
                    <polyline points="32,28 32,32 35,32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            id: 'anti-skid',
            title: 'Anti-Skid',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Crossed hammer and wrench */}
                    <path d="M22 17 L28 23 L25 26 L19 20 Z" fill="#ffffff" />
                    <line x1="26" y1="25" x2="44" y2="43" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                    <rect x="42" y="41" width="6" height="6" rx="1" fill="#ffffff" transform="rotate(45 45 44)" />
                    {/* Crossed wrench */}
                    <path d="M41 18 C39 16 39 13 41 11 C43 9 46 9 48 11 L45 14 L49 18 L46 21 Z" fill="#ffffff" />
                    <line x1="43" y1="21" x2="23" y2="41" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                    <circle cx="21" cy="43" r="3" fill="#ffffff" />
                </svg>
            ),
        },
        {
            id: 'high-load-bearing',
            title: 'High Load Bearing Capacity',
            icon: (
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
                    {/* Industrial diamond tread plate texture */}
                    <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                        <line x1="22" y1="18" x2="28" y2="24" />
                        <line x1="36" y1="18" x2="42" y2="24" />
                        <line x1="16" y1="30" x2="22" y2="36" />
                        <line x1="30" y1="30" x2="36" y2="36" />
                        <line x1="44" y1="30" x2="50" y2="36" />
                        <line x1="22" y1="42" x2="28" y2="48" />
                        <line x1="36" y1="42" x2="42" y2="48" />
                        {/* Opposite angles */}
                        <line x1="36" y1="24" x2="30" y2="18" />
                        <line x1="50" y1="24" x2="44" y2="18" />
                        <line x1="28" y1="36" x2="22" y2="30" />
                        <line x1="42" y1="36" x2="36" y2="30" />
                        <line x1="36" y1="48" x2="30" y2="42" />
                    </g>
                </svg>
            ),
        },
        {
            id: 'view-more',
            title: 'View More',
            isLink: true,
            linkTo: '/products',
            icon: (
                <svg viewBox="0 0 64 64" width="34" height="34" fill="none">
                    {/* Double chevron right >> */}
                    <polyline points="22,20 34,32 22,44" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="34,20 46,32 34,44" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ];

    return (
        <section className="why-choose-smt-section">
            <div className="why-choose-smt-container">
                <h2 className="why-choose-smt-title">Why choose SMT Pavers?</h2>
                <div className="why-choose-smt-underline"></div>
                <p className="why-choose-smt-subtitle">
                    Engineered with automated hydraulic compaction for superior durability, weather resistance, and lasting architectural appeal.
                </p>

                <div className="why-choose-badges-grid">
                    {features.map((item) => (
                        item.isLink ? (
                            <Link to={item.linkTo || '/products'} key={item.id} className="why-choose-badge-card link-badge">
                                <div className="badge-ring-outer view-more-ring">
                                    <div className="badge-circle-inner view-more-circle">
                                        {item.icon}
                                    </div>
                                </div>
                                <span className="badge-card-title view-more-text">{item.title}</span>
                            </Link>
                        ) : (
                            <div key={item.id} className="why-choose-badge-card">
                                <div className="badge-ring-outer">
                                    <div className="badge-circle-inner">
                                        {item.icon}
                                    </div>
                                </div>
                                <span className="badge-card-title">{item.title}</span>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoosePavers;
