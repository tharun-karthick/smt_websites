import React from "react";

export default function GoogleMap() {
    return (
        <div className="locations-section">
            <div className="maps-container">
                <div className="map-wrapper">
                    <div className="map-header-card">
                        <span className="map-unit-tag">MANUFACTURING UNIT 1</span>
                        <h4 className="map-unit-title">SMT Flyash Bricks — Chennimalai</h4>
                        <p className="map-unit-address">
                            D. No 58, Senthampalayam, Mukasipidariyur, Chennimalai, Tamil Nadu - 638051.
                        </p>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=D.+No+58,+Senthampalayam,+Mukasipidariyur,+Chennimalai,+Tamil+Nadu+638051" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="map-directions-link"
                        >
                            <span>Open in Google Maps</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                    <iframe
                        className="map-iframe"
                        src="https://maps.google.com/maps?q=D.+No+58,+Senthampalayam,+Mukasipidariyur,+Chennimalai,+Tamil+Nadu+638051&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        title="SMT Flyash Bricks - Chennimalai Unit-1"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="map-wrapper">
                    <div className="map-header-card">
                        <span className="map-unit-tag">MANUFACTURING UNIT 2</span>
                        <h4 className="map-unit-title">SMT Bricks and Blocks — Peruntholuvu</h4>
                        <p className="map-unit-address">
                            No.3/72, Post, Andipalayam, Peruntholuvu, Tamil Nadu - 641665.
                        </p>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=No.3/72,+Post,+Andipalayam,+Peruntholuvu,+Tamil+Nadu+641665" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="map-directions-link"
                        >
                            <span>Open in Google Maps</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                    <iframe
                        className="map-iframe"
                        src="https://maps.google.com/maps?q=No.3/72,+Post,+Andipalayam,+Peruntholuvu,+Tamil+Nadu+641665&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        title="SMT Bricks and Blocks - Peruntholuvu Unit-2"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}