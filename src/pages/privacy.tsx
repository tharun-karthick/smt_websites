import React from 'react';
import NavBar from '../components/navbar';
import FooterComponent from '../components/footer';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="policy-page-wrapper">
            <NavBar />

            <div className="policy-content-container">
                <h1 className="policy-title">Privacy Policy – SMT Groups</h1>
                <p className="policy-intro">
                    Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                </p>

                <h3 className="policy-section-title">1. Information We Collect</h3>
                <p className="policy-text">We may collect:</p>
                <ul className="policy-list">
                    <li>Personal details (name, email address, phone number)</li>
                    <li>Information you provide through forms, inquiries, or communication</li>
                </ul>

                <h3 className="policy-section-title">2. How We Use Information</h3>
                <p className="policy-text">We use your information to:</p>
                <ul className="policy-list">
                    <li>Respond to your inquiries</li>
                    <li>Provide our services</li>
                    <li>Improve customer experience</li>
                    <li>Send updates or promotional messages (only if you agree)</li>
                </ul>

                <h3 className="policy-section-title">3. Cookies</h3>
                <p className="policy-text margin-bottom">
                    We may use basic cookies to improve your browsing experience. You can disable cookies in your browser settings if you prefer.
                </p>

                <h3 className="policy-section-title">4. Data Sharing</h3>
                <p className="policy-text margin-bottom-small">We do NOT sell your personal information.</p>
                <p className="policy-text">We may share data only with:</p>
                <ul className="policy-list">
                    <li>Trusted service providers (for website or communication purposes)</li>
                    <li>Legal authorities if required by law</li>
                </ul>

                <h3 className="policy-section-title">5. Data Security</h3>
                <p className="policy-text margin-bottom">
                    We take reasonable steps to protect your information, but no method of transmission over the internet is completely secure.
                </p>

                <h3 className="policy-section-title">6. Third-Party Links</h3>
                <p className="policy-text margin-bottom">
                    Our website may contain links to external websites. We are not responsible for their privacy practices.
                </p>

                <h3 className="policy-section-title">7. Your Rights</h3>
                <p className="policy-text">You have the right to:</p>
                <ul className="policy-list">
                    <li>Access your personal data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent at any time</li>
                </ul>

                <h3 className="policy-section-title">8. Changes to This Privacy Policy</h3>
                <p className="policy-text margin-bottom">
                    We may update this Privacy Policy occasionally. Changes will be posted on this page.
                </p>

                <h3 className="policy-section-title">9. Contact Us</h3>
                <p className="policy-text margin-bottom-small">
                    If you have any questions about this privacy policy, you can contact us:
                </p>
                <ul className="policy-list">
                    <li><strong>By email:</strong> <a href="mailto:smtflyashbricks@gmail.com" className="policy-link">smtflyashbricks@gmail.com</a></li>
                    <li><strong>By visiting this page on our website:</strong> <Link to="/contact" className="policy-link">Contact Us</Link></li>
                    <li><strong>By phone number:</strong> <a href="tel:+919942375000" className="policy-link">+91 99423 75000</a></li>
                    <li><strong>By Visiting Our Location:</strong> D.No. 58, Senthampalayam, Mukasipidariyur, Perundurai, Erode - 638 051.</li>
                </ul>
            </div>

            <FooterComponent />
        </div>
    );
}

export default Privacy;