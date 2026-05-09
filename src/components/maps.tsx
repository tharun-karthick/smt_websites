export default function GoogleMap() {
    return (
        <div className="locations-section">
            <div className="maps-container">
                <div className="map-wrapper">
                    <iframe
                        className="map-iframe"
                        src="https://maps.google.com/maps?q=SMT+FLYASH+BRICKS&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Puducherry Location"
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="map-wrapper">
                    <iframe
                        className="map-iframe"
                        src="https://maps.google.com/maps?q=SMT+FLYASH+BRICKS&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Perundurai Location"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}