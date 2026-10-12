import React from 'react';
import { Star } from 'lucide-react';
import { GoogleReviewCardProps } from '../types/componetTypes';

const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({
    name,
    photo,
    rating = 5,
    reviewText,
    mapUrl = "https://maps.google.com/maps?q=SMT+FLYASH+BRICKS",
    reviewDate = "Google Review"
}) => {
    return (
        <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="google-review-card"
            title={`Read ${name}'s full review on Google Maps`}
        >
            <div className="gr-header">
                <img src={photo} alt={`${name} avatar`} className="gr-avatar" />
                <div className="gr-user-info">
                    <span className="gr-name">{name}</span>
                    <span className="gr-time">{reviewDate}</span>
                </div>
                <div className="gr-google-icon" title="Verified Google Review">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width="22" height="22" />
                </div>
            </div>
            <div className="gr-stars">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={15} 
                        fill={i < rating ? "#fbbc04" : "none"} 
                        color={i < rating ? "#fbbc04" : "#dadce0"} 
                    />
                ))}
            </div>
            <p className="gr-text">{reviewText}</p>
            <div className="gr-footer-link">
                <span>View on Google Maps</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </div>
        </a>
    );
};

export default GoogleReviewCard;
