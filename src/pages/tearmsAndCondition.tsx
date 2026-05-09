import React from 'react';
import NavBar from '../components/navbar';
import FooterComponent from '../components/footer';
import { Link } from 'react-router-dom';
import bgImage from '../assets/background-buildingsketch.png';

const TermsAndConditions = () => {
    return (
        <div className="policy-page-wrapper" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${bgImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
            <NavBar />

            <div className="policy-content-container">
                <h1 className="policy-title">Terms & Conditions</h1>
                <p className="policy-intro">
                    Welcome to the official website of SMT Groups. These Terms and Conditions outline the rules and regulations for your use of our Site. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using the Site.
                </p>

                <h3 className="policy-section-title">1. Acceptance of Terms</h3>
                <p className="policy-text">
                    By using this Site, you acknowledge that you have read, understood, and agree to comply with these Terms. If you are accessing the Site on behalf of an organization, you confirm that you have the authority to bind that organization to these Terms.
                </p>

                <h3 className="policy-section-title">2. Changes to Terms</h3>
                <p className="policy-text">
                    SMT Groups reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Site. Your continued use of the Site after changes are posted constitutes your acceptance of the new Terms.
                </p>

                <h3 className="policy-section-title">3. Intellectual Property</h3>
                <p className="policy-text">
                    All content on the Site, including text, graphics, logos, and images, is the property of SMT Groups or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works from any content without express written permission from SMT Groups.
                </p>

                <h3 className="policy-section-title">4. User Responsibilities</h3>
                <p className="policy-text">
                    You agree not to use the Site for any unlawful purposes or in a way that may damage, disable, overburden, or impair the Site. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>

                <h3 className="policy-section-title">5. User-Generated Content</h3>
                <p className="policy-text">
                    If you submit any content to the Site (e.g., comments, reviews), you grant SMT Groups a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, publish, and distribute such content. You are solely responsible for any content you submit and for ensuring that it does not violate any third-party rights.
                </p>

                <h3 className="policy-section-title">6. Third-Party Links</h3>
                <p className="policy-text">
                    The Site may contain links to third-party websites. SMT Groups does not endorse or assume any responsibility for the content or practices of these websites. You access them at your own risk.
                </p>

                <h3 className="policy-section-title">7. Disclaimer of Warranties</h3>
                <p className="policy-text">
                    The Site is provided on an “as-is” and “as-available” basis. SMT Groups makes no representations or warranties of any kind, express or implied, regarding the Site’s operation, content, or availability. To the fullest extent permitted by law, SMT Groups disclaims all warranties, express or implied.
                </p>

                <h3 className="policy-section-title">8. Limitation of Liability</h3>
                <p className="policy-text">
                    In no event shall SMT Groups, its directors, employees, or agents be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the Site, even if advised of the possibility of such damage.
                </p>

                <h3 className="policy-section-title">9. Indemnification</h3>
                <p className="policy-text">
                    You agree to indemnify, defend, and hold harmless SMT Groups from any claims, losses, liabilities, damages, costs, or expenses (including reasonable attorney fees) arising from your use of the Site, your violation of these Terms, or your infringement of any rights of another party.
                </p>

                <h3 className="policy-section-title">10. Governing Law</h3>
                <p className="policy-text">
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
                </p>

                <h3 className="policy-section-title">11. Contact Information</h3>
                <p className="policy-text margin-bottom-small">
                    If you have any questions or concerns about these Terms, please contact us at:
                </p>
                <ul className="policy-list">
                    <li><strong>Email:</strong> <a href="mailto:smtflyashbricks@gmail.com" className="policy-link">smtflyashbricks@gmail.com</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+919942375000" className="policy-link">+91 99423 75000</a></li>
                    <li><strong>Contact Page:</strong> <Link to="/contact" className="policy-link">Visit our Contact Us page</Link></li>
                </ul>
            </div>

            <FooterComponent />
        </div>
    );
}

export default TermsAndConditions;