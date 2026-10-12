import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/navbar';
import FooterComponent from '../components/footer';
import GoogleMap from '../components/maps';
import bgImage from '../assets/background-buildingsketch.png';

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS credentials
    const serviceID = 'service_9m02htv';
    const templateID = 'template_ttv0z1j';
    const publicKey = '9HsHsFbbobr2zs9aL';

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current?.reset();
          setCharCount(0);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error('EmailJS Submission Failed:', error);
        }
      );
  };

  const faqs = [
    {
      q: 'What is the compressive strength of SMT Paver Blocks & Fly Ash Bricks?',
      a: 'SMT Paver Blocks are engineered in M30, M40, and M50 grades (30 to 50 N/mm²) compliant with IS 15658:2021 for heavy vehicular and commercial traffic. SMT Fly Ash Bricks achieve 7.5 to 12.5 N/mm², exceeding IS 12894 standards.',
    },
    {
      q: 'Do you provide direct factory loading and site transport?',
      a: 'Yes, both our Chennimalai (Unit-1) and Peruntholuvu (Unit-2) manufacturing plants feature automated hydraulic palletizing for rapid truck loading. We provide reliable freight dispatch directly to your construction site across Tamil Nadu.',
    },
    {
      q: 'Can we get factory test certificates for project approvals?',
      a: 'Yes, SMT provides third-party and in-house laboratory compressive strength, water absorption, and abrasion resistance test certificates for government PWD, CPWD, NHAI, and private infrastructure projects.',
    },
    {
      q: 'What thicknesses, shapes, and colors are available for paver blocks and designer tiles?',
      a: 'We manufacture Rubber Mould Pavers (Zig-Zag, I-Shape, Cosmic, Diamond, Arch, Cobble Stone, Key Paver, Brick Paver, Square Paver in 60mm, 80mm & 100mm), Normal Pavers (60mm & 80mm), 60mm Grass Pavers, Precast Kerb Stones, and 22-24mm Designer Tiles (Corwin, Track, Escort, Metro Link, Majestic, Emperor Step Tiles, Terra Zone, Magna, Granito, etc.).',
    },
  ];

  return (
    <div className="contact-page-root" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `linear-gradient(rgba(247, 250, 248, 0.94), rgba(243, 248, 244, 0.96)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    }}>
      <NavBar />

      {/* Hero Header: SMT Direct Factory Sales Banner */}
      <section className="contact-hero-banner">
        <div className="contact-hero-content">
          <div className="association-badge">
            <span className="badge-pulse"></span>
            <span>SMT INFRASTRUCTURE | DIRECT FACTORY SALES</span>
          </div>
          <h1 className="contact-hero-title">
            Direct Factory Procurement &amp; <span className="highlight-text">Enquiry Portal</span>
          </h1>
          <p className="contact-hero-desc">
            Connect directly with SMT manufacturing plants for wholesale pricing on Flyash Bricks, Rubber Mould &amp; Interlocking Paver Blocks, Designer Tiles, and Precast Kerb Stones. Fast site delivery across Tamil Nadu.
          </p>

          <div className="association-key-stats">
            <div className="hero-stat-pill">
              <strong>M30 to M50 Grade</strong>
              <span>Heavy Duty Pavers</span>
            </div>
            <div className="hero-stat-pill">
              <strong>IS 12894 Certified</strong>
              <span>Eco Fly Ash Bricks</span>
            </div>
            <div className="hero-stat-pill">
              <strong>2 Casting Plants</strong>
              <span>Chennimalai &amp; Peruntholuvu</span>
            </div>
            <div className="hero-stat-pill">
              <strong>16+ Years</strong>
              <span>Manufacturing Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container: 2-Column SMT Direct Layout */}
      <main className="contact-layout-wrapper">
        
        {/* Left Column: SMT Plants & Direct Contacts */}
        <aside className="association-info-panel">
          
          <div className="panel-header">
            <h2 className="panel-title">SMT Manufacturing Units</h2>
            <p className="panel-subtitle">Contact our factory offices directly for loading schedules, site visits, and instant support.</p>
          </div>

          <div className="hub-cards-container">
            {/* Hub 1: Unit-1 Chennimalai */}
            <div className="hub-card factory-hub">
              <div className="hub-tag factory-tag">Unit-1 • Main Flyash Brick Plant</div>
              <h3 className="hub-name">SMT Flyash Bricks — Chennimalai</h3>
              <p className="hub-address">
                D. No 58, Senthampalayam, Mukasipidariyur, Chennimalai,<br />
                Tamil Nadu - 638051.
              </p>
              <div className="hub-contacts">
                <a href="tel:+919940599404" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Phone: +91 99405 99404</span>
                </a>
                <a href="tel:+919942385000" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Alt Phone: +91 99423 85000</span>
                </a>
                <a href="mailto:smtflyashbricks@gmail.com" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>smtflyashbricks@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Hub 2: Unit-2 Peruntholuvu */}
            <div className="hub-card factory-hub">
              <div className="hub-tag coastal-tag">Unit-2 • Pavers &amp; Blocks Plant</div>
              <h3 className="hub-name">SMT Bricks and Blocks — Peruntholuvu</h3>
              <p className="hub-address">
                No.3/72, Post, Andipalayam, Peruntholuvu,<br />
                Tamil Nadu - 641665.
              </p>
              <div className="hub-contacts">
                <a href="tel:+919940599404" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Phone: +91 99405 99404</span>
                </a>
                <a href="tel:+919942385000" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Alt Phone: +91 99423 85000</span>
                </a>
                <a href="mailto:smtflyashbricks@gmail.com" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>smtflyashbricks@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* SMT Supply Capabilities Strip */}
          <div className="association-zones-box">
            <h4 className="zones-title">SMT Direct Delivery Coverage:</h4>
            <div className="zones-list">
              <span className="zone-chip">📍 Chennimalai &amp; Erode</span>
              <span className="zone-chip">📍 Peruntholuvu &amp; Tirupur</span>
              <span className="zone-chip">📍 Coimbatore &amp; Salem</span>
              <span className="zone-chip">📍 All Tamil Nadu Districts</span>
            </div>
          </div>

          {/* Direct WhatsApp Callout Card */}
          <div className="instant-whatsapp-card">
            <div className="whatsapp-card-content">
              <h4>Need Immediate Factory Pricing?</h4>
              <p>Chat directly with SMT's plant sales desk on WhatsApp for immediate catalog, sample photos, and custom quote.</p>
            </div>
            <a
              href="https://wa.me/919940599404?text=Hello%20SMT%20Team,%20I%20would%20like%20to%20get%20a%20direct%20factory%20quotation%20for%20Flyash%20Bricks,%20Paver%20Blocks,%20Designer%20Tiles,%20or%20Kerb%20Stones."
              target="_blank"
              rel="noreferrer"
              className="whatsapp-action-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              <span>WhatsApp Direct Enquiry</span>
            </a>
          </div>

        </aside>

        {/* Right Column: Direct SMT Factory Enquiry Form with EmailJS */}
        <section className="association-form-panel">
          <form ref={form} onSubmit={sendEmail} className="association-enquiry-form">
            
            <div className="form-title-group">
              <span className="form-eyebrow">Direct Factory Portal</span>
              <h2 className="form-main-heading">SMT Direct Factory Enquiry Form</h2>
              <p className="form-main-desc">
                Submit your project requirements below to receive a direct factory quotation and technical datasheet from the SMT sales team via EmailJS.
              </p>
            </div>

            {/* Subsection 1: Contact Identity */}
            <div className="form-section-block">
              <h3 className="block-title">
                <span className="block-number">1</span>
                Contact & Company Information
              </h3>
              
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="user_name">Full Name <span className="required">*</span></label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="user_company">Company / Builder / Contractor Name</label>
                  <input
                    id="user_company"
                    type="text"
                    name="user_company"
                    placeholder="e.g. ABC Developers / Contractor"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="user_phone">Phone / WhatsApp Number <span className="required">*</span></label>
                  <div className="phone-input">
                    <span className="country-code">🇮🇳 +91</span>
                    <input
                      id="user_phone"
                      type="tel"
                      name="user_phone"
                      placeholder="Enter 10-digit mobile number"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="user_email">Email Address <span className="required">*</span></label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Subsection 2: Requirement Details */}
            <div className="form-section-block">
              <h3 className="block-title">
                <span className="block-number">2</span>
                Product Requirement & Site Details
              </h3>

              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="enquiry_type">Select SMT Product / Service <span className="required">*</span></label>
                  <select id="enquiry_type" name="enquiry_type" required defaultValue="Fly Ash Bricks">
                    <option value="Fly Ash Bricks">SMT Eco Fly Ash Bricks (IS 12894 Certified)</option>
                    <option value="Rubber Mould Paver Blocks">SMT Rubber Mould Paver Blocks (60mm / 80mm / 100mm)</option>
                    <option value="Normal Paver Blocks">SMT Normal Paver Blocks (60mm &amp; 80mm)</option>
                    <option value="Designer Tiles">SMT Architectural Designer Tiles (22mm - 24mm)</option>
                    <option value="Precast Kerb Stones">SMT Precast Road &amp; Pathway Kerb Stones</option>
                    <option value="Grass Paver Blocks">SMT Permeable Grass Paver Blocks (60mm)</option>
                    <option value="Solid Concrete Blocks">SMT Solid Concrete Blocks</option>
                    <option value="Factory Quotation & Estimation">Direct Factory Price Quotation &amp; Estimation</option>
                    <option value="Site Laying & Consultation">Site Measurement &amp; Paving Laying Services</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="project_location">Delivery District / Site Location <span className="required">*</span></label>
                  <select id="project_location" name="project_location" required defaultValue="Chennimalai / Erode">
                    <option value="Chennimalai / Erode">Erode &amp; Chennimalai (Unit-1 Hub)</option>
                    <option value="Peruntholuvu / Tirupur">Tirupur &amp; Peruntholuvu (Unit-2 Hub)</option>
                    <option value="Coimbatore">Coimbatore District</option>
                    <option value="Salem">Salem &amp; Namakkal</option>
                    <option value="Chennai">Chennai &amp; Suburbs</option>
                    <option value="Trichy">Tiruchirappalli (Trichy)</option>
                    <option value="Karur">Karur &amp; Dindigul</option>
                    <option value="Other District in Tamil Nadu">Other District in Tamil Nadu</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="quantity">Estimated Quantity (Units / Sq.Ft)</label>
                  <input
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="e.g. 10,000 Bricks or 5,000 Sq.Ft Pavers"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="timeline">Required Delivery Timeline</label>
                  <select id="timeline" name="timeline" defaultValue="Immediate (1-3 Days)">
                    <option value="Immediate (1-3 Days)">Immediate Dispatch (1-3 Days)</option>
                    <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="Planning Stage">Planning / Estimating Stage</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Subsection 3: Specifications & Message */}
            <div className="form-section-block">
              <h3 className="block-title">
                <span className="block-number">3</span>
                Technical Specifications & Project Message
              </h3>

              <div className="input-group">
                <label htmlFor="message">Message / Specifications <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project requirements (e.g. paver thickness 60mm/80mm/100mm, colors, patterns, bricks quantity, or delivery site address)..."
                  maxLength={600}
                  required
                  rows={5}
                  onChange={(e) => setCharCount(e.target.value.length)}
                ></textarea>
                <div className="char-limit-indicator">
                  <span>{charCount} / 600 characters</span>
                </div>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="agree" name="agree" required defaultChecked />
                <label htmlFor="agree">
                  I agree to receive direct factory quotations, product test certificates, and dispatch updates from the SMT sales team via Phone, WhatsApp, and Email.
                </label>
              </div>
            </div>

            {/* Submit Button & Interactive EmailJS Status */}
            <div className="form-action-container">
              <button
                type="submit"
                className={`submit-btn-association ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    <span>SENDING VIA EMAILJS...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT DIRECT SMT ENQUIRY</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </>
                )}
              </button>
            </div>

            {/* EmailJS Status Alerts */}
            {submitStatus === 'success' && (
              <div className="status-notification success-box">
                <div className="status-icon">✓</div>
                <div>
                  <h4>Enquiry Dispatched Successfully!</h4>
                  <p>Thank you for contacting SMT! Your enquiry has been sent to our sales and dispatch desk via EmailJS. Our plant coordinator will reach out to you within 2-4 business hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-notification error-box">
                <div className="status-icon">⚠️</div>
                <div>
                  <h4>Submission Notice</h4>
                  <p>Could not send through EmailJS at this instant. You can connect directly with our SMT sales manager on WhatsApp or Call for an instant quote.</p>
                  <a
                    href="https://wa.me/919940599404?text=Hello%20SMT%20Team,%20I%20am%20looking%20for%20a%20factory%20quote%20for%20Flyash%20Bricks,%20Paver%20Blocks,%20Designer%20Tiles,%20or%20Kerb%20Stones."
                    target="_blank"
                    rel="noreferrer"
                    className="error-fallback-btn"
                  >
                    Open Direct WhatsApp Chat
                  </a>
                </div>
              </div>
            )}

            {/* Form Footer Strip */}
            <div className="form-meta-footer">
              <div className="security-badge">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Direct SMT Factory Portal | Privacy Guaranteed</span>
              </div>
              <div className="social-links-strip">
                <a
                  href="https://wa.me/919940599404"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn whatsapp"
                  title="WhatsApp (+91 99405 99404)"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </a>
                <a
                  href="tel:+919940599404"
                  className="social-icon-btn phone"
                  title="Direct Phone Call (+91 99405 99404)"
                  aria-label="Direct Phone Call"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
                <a
                  href="tel:+919942385000"
                  className="social-icon-btn phone"
                  title="Direct Phone Call (+91 99423 85000)"
                  aria-label="Alternate Phone Call"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
                <a
                  href="mailto:smtflyashbricks@gmail.com"
                  className="social-icon-btn email"
                  title="Official Email"
                  aria-label="Official Email"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div>
            </div>

          </form>
        </section>

      </main>

      {/* SMT Technical FAQ Section */}
      <section className="association-faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-eyebrow">Customer & Technical Advisory</span>
            <h2 className="faq-title">Frequently Asked SMT Questions</h2>
            <p className="faq-desc">Answers to common questions regarding our factory direct orders, testing reports, and delivery.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-card ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question-row">
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle-icon">{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && (
                  <div className="faq-answer-row">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMT Factory Maps Section */}
      <section className="contact-map-wrapper">
        <div className="map-header-block">
          <span className="map-eyebrow">Direct Factory Inspection & Loading</span>
          <h2 className="map-title">SMT Manufacturing Locations</h2>
          <p className="map-desc">Visit our high-capacity production plants in Chennimalai (Unit-1) & Peruntholuvu (Unit-2) for live sample inspections and prompt dispatch.</p>
        </div>
        <GoogleMap />
      </section>

      <FooterComponent />
    </div>
  );
};

export default ContactPage;
