import React from 'react';
import { Star } from 'lucide-react';
import { GoogleReviewCardProps } from '../types/componetTypes';

const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({ name, photo, rating = 5, reviewText }) => {
    return (
        <div className="google-review-card">
            <div className="gr-header">
                <img src={photo} alt={`${name} avatar`} className="gr-avatar" />
                <div className="gr-user-info">
                    <span className="gr-name">{name}</span>
                </div>
                <div className="gr-google-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width="24" height="24" />
                </div>
            </div>
            <div className="gr-stars">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={16} 
                        fill={i < rating ? "#fbbc04" : "none"} 
                        color={i < rating ? "#fbbc04" : "#dadce0"} 
                    />
                ))}
            </div>
            <p className="gr-text">{reviewText}</p>
        </div>
    );
};

export default GoogleReviewCard;
