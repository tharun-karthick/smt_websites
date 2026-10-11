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
      q: 'What is the standard compressive strength for SMT Fly Ash Bricks & Pavers?',
      a: 'SMT Fly Ash Bricks achieve 7.5 to 12.5 N/mm² (exceeding IS 12894 standards). Interlocking paver blocks are engineered from M30 up to M50 grade (30 to 50 N/mm²) for heavy commercial and industrial vehicular traffic as per IS 15658.',
    },
    {
      q: 'Can we get factory test certificates for government & infrastructure tenders?',
      a: 'Yes, every bulk supply batch is provided with third-party and in-house laboratory compressive strength and water absorption test certificates compliant with Tamil Nadu PWD, CPWD, and municipal standards.',
    },
    {
      q: 'What are the delivery lead times and covered regional zones?',
      a: 'We cover all districts across Tamil Nadu and Puducherry through our 4 association zones (Chennai, Mettur, Neyveli, and Tuticorin). In-stock products are dispatched within 24 to 48 hours directly to project sites.',
    },
    {
      q: 'How can manufacturers or distributors join the Association Network?',
      a: 'Brick and block manufacturers in Tamil Nadu can submit their membership inquiry through this form under "Association Membership & Zone Enrollment" or contact the Anna Nagar Secretariat directly.',
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

      {/* Hero Header: Association & Industry Network Banner */}
      <section className="contact-hero-banner">
        <div className="contact-hero-content">
          <div className="association-badge">
            <span className="badge-pulse"></span>
            <span>TAMIL NADU FLY ASH BRICKS & BLOCKS ASSOCIATION NETWORK</span>
          </div>
          <h1 className="contact-hero-title">
            Connect With The <span className="highlight-text">Association & Manufacturing Hub</span>
          </h1>
          <p className="contact-hero-desc">
            Direct factory quotations, technical testing certifications, bulk project dispatch, and regional zone coordination across Tamil Nadu and Puducherry.
          </p>

          <div className="association-key-stats">
            <div className="hero-stat-pill">
              <strong>IS 12894:2002</strong>
              <span>Certified Fly Ash Bricks</span>
            </div>
            <div className="hero-stat-pill">
              <strong>IS 15658:2021</strong>
              <span>Heavy Duty Pavers</span>
            </div>
            <div className="hero-stat-pill">
              <strong>4 Regional Zones</strong>
              <span>Statewide Dispatch</span>
            </div>
            <div className="hero-stat-pill">
              <strong>16+ Years</strong>
              <span>Industry Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container: 2-Column Association Layout */}
      <main className="contact-layout-wrapper">
        
        {/* Left Column: Association Hubs & Direct Hotlines */}
        <aside className="association-info-panel">
          
          <div className="panel-header">
            <h2 className="panel-title">Regional Secretariat & Factories</h2>
            <p className="panel-subtitle">Reach out directly to our state secretariat or regional manufacturing units.</p>
          </div>

          <div className="hub-cards-container">
            {/* Hub 1: Association Registered Secretariat */}
            <div className="hub-card association-headquarters">
              <div className="hub-tag">Official Association Secretariat</div>
              <h3 className="hub-name">Tamilnadu Fly Ash Bricks Association (TNFABA)</h3>
              <p className="hub-address">
                AD61, New No. 3 AD Block, 3rd Street,<br />
                Anna Nagar, Chennai - 600040, Tamil Nadu.
              </p>
              <div className="hub-contacts">
                <a href="tel:+918883144777" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Secretariat: +91 88831 44777</span>
                </a>
                <a href="mailto:smtflyashbricks@gmail.com" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>smtflyashbricks@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Hub 2: Main Manufacturing Plant & Lab (Perundurai) */}
            <div className="hub-card factory-hub">
              <div className="hub-tag factory-tag">Main Factory & Material Testing Lab</div>
              <h3 className="hub-name">SMT Pavers & Bricks — Perundurai Unit</h3>
              <p className="hub-address">
                04/184, Kummakalipalayam, Perundurai R.S (post),<br />
                Perundurai, Erode - 638052, Tamil Nadu.
              </p>
              <div className="hub-contacts">
                <a href="tel:+919942375000" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Factory Direct: +91 99423 75000</span>
                </a>
              </div>
            </div>

            {/* Hub 3: Coastal Distribution & Manufacturing Hub (Puducherry) */}
            <div className="hub-card factory-hub">
              <div className="hub-tag coastal-tag">Coastal Manufacturing & Dispatch Unit</div>
              <h3 className="hub-name">SMT Pavers — Puducherry Plant</h3>
              <p className="hub-address">
                R.S.No. 127/1/A/1, Arumpathapuram, Villianur Main Road,<br />
                V.I.P. Nagar, Puducherry - 605110.
              </p>
              <div className="hub-contacts">
                <a href="tel:+919942375000" className="hub-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Dispatch Desk: +91 99423 75000</span>
                </a>
              </div>
            </div>
          </div>

          {/* Operational Zones Strip */}
          <div className="association-zones-box">
            <h4 className="zones-title">Association Operational Zones:</h4>
            <div className="zones-list">
              <span className="zone-chip">📍 Chennai Zone</span>
              <span className="zone-chip">📍 Mettur & Erode Zone</span>
              <span className="zone-chip">📍 Neyveli & Puducherry Zone</span>
              <span className="zone-chip">📍 Tuticorin Zone</span>
            </div>
          </div>

          {/* Direct WhatsApp Callout Card */}
          <div className="instant-whatsapp-card">
            <div className="whatsapp-card-content">
              <h4>Need Immediate Factory Pricing?</h4>
              <p>Chat directly with our plant logistics & engineering team on WhatsApp for instant catalog & quote.</p>
            </div>
            <a
              href="https://wa.me/919942375000?text=Hello%20SMT%20Team,%20I%20would%20like%20to%20inquire%20about%20Fly%20Ash%20Bricks%20and%20Paver%20Blocks%20quotation."
              target="_blank"
              rel="noreferrer"
              className="whatsapp-action-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              <span>WhatsApp Us Now</span>
            </a>
          </div>

        </aside>

        {/* Right Column: Association & Factory Supply Form with EmailJS */}
        <section className="association-form-panel">
          <form ref={form} onSubmit={sendEmail} className="association-enquiry-form">
            
            <div className="form-title-group">
              <span className="form-eyebrow">Online Portal</span>
              <h2 className="form-main-heading">Association & Supply Enquiry Form</h2>
              <p className="form-main-desc">
                Please complete the details below. All submissions are automatically dispatched via EmailJS to our technical desk.
              </p>
            </div>

            {/* Subsection 1: Contact Identity */}
            <div className="form-section-block">
              <h3 className="block-title">
                <span className="block-number">1</span>
                Contact & Organization Information
              </h3>
              
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="user_name">Full Name <span className="required">*</span></label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="e.g. Er. K. Ramesh"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="user_company">Company / Builder / Firm Name</label>
                  <input
                    id="user_company"
                    type="text"
                    name="user_company"
                    placeholder="e.g. Ramesh Constructions / Developer"
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
                      placeholder="98765 43210"
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

            {/* Subsection 2: Inquiry Classification */}
            <div className="form-section-block">
              <h3 className="block-title">
                <span className="block-number">2</span>
                Requirement Details & Classification
              </h3>

              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="enquiry_type">Nature of Enquiry <span className="required">*</span></label>
                  <select id="enquiry_type" name="enquiry_type" required defaultValue="Fly Ash Bricks Bulk Supply">
                    <option value="Fly Ash Bricks Bulk Supply">Eco Fly Ash Bricks Bulk Supply</option>
                    <option value="Heavy Duty Pavers Supply">Interlocking Paver Blocks (Heavy Duty / Industrial)</option>
                    <option value="Concrete Solid Blocks">Solid Concrete Blocks & Kerb Stones</option>
                    <option value="Association Membership">Association Membership & Zone Enrollment</option>
                    <option value="Technical Lab Certificates">Technical Specs & IS Test Certificates</option>
                    <option value="Site Laying & Estimation">Site Measurement & Laying Consultation</option>
                    <option value="General Technical Inquiry">Other Commercial Inquiry</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="project_location">Delivery District / Site Location <span className="required">*</span></label>
                  <select id="project_location" name="project_location" required defaultValue="Erode">
                    <option value="Erode">Erode District (Main Plant)</option>
                    <option value="Puducherry">Puducherry / Karaikal</option>
                    <option value="Coimbatore">Coimbatore District</option>
                    <option value="Chennai">Chennai & Suburbs</option>
                    <option value="Tirupur">Tirupur District</option>
                    <option value="Salem">Salem & Namakkal</option>
                    <option value="Trichy">Tiruchirappalli (Trichy)</option>
                    <option value="Cuddalore">Cuddalore & Villupuram</option>
                    <option value="Madurai">Madurai & South TN</option>
                    <option value="Other Tamil Nadu Location">Other District in Tamil Nadu</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="quantity">Estimated Quantity (Units / Sq.Ft)</label>
                  <input
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="e.g. 15,000 Bricks or 5,000 Sq.Ft Pavers"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="timeline">Required Delivery Timeline</label>
                  <select id="timeline" name="timeline" defaultValue="Immediate (1-3 Days)">
                    <option value="Immediate (1-3 Days)">Immediate Dispatch (1-3 Days)</option>
                    <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="Planning / Budgeting Stage">Planning / Tender Stage</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Subsection 3: Message & Specs */}
            <div className="form-section-block">
              <h3 className="block-title">
                <span className="block-number">3</span>
                Technical Specifications & Project Notes
              </h3>

              <div className="input-group">
                <label htmlFor="message">Message / Scope of Work <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Specify product grade (e.g. M30, M40, M50), dimensions (60mm, 80mm, 100mm), patterns, or site unloading requirements..."
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
                  I consent to receive official technical quotations, compliance test reports, and dispatch updates via Phone, WhatsApp, and Email.
                </label>
              </div>
            </div>

            {/* Submit Button & Interactive Statuses */}
            <div className="form-action-container">
              <button
                type="submit"
                className={`submit-btn-association ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    <span>DISPATCHING VIA EMAILJS...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT OFFICIAL ENQUIRY</span>
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
                  <p>Your technical inquiry has been submitted directly to our coordinator via EmailJS. We will review your project parameters and respond within 2-4 business hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-notification error-box">
                <div className="status-icon">⚠️</div>
                <div>
                  <h4>Submission Encountered An Issue</h4>
                  <p>We could not dispatch via EmailJS at this moment. You can connect immediately with our plant manager via WhatsApp or Call for an instant quote.</p>
                  <a
                    href="https://wa.me/919942375000?text=Hello%20SMT%20Team,%20I%20tried%20submitting%20a%20contact%20form%20for%20Fly%20Ash%20Bricks%20and%20Paver%20Blocks."
                    target="_blank"
                    rel="noreferrer"
                    className="error-fallback-btn"
                  >
                    Open WhatsApp Chat Direct
                  </a>
                </div>
              </div>
            )}

            {/* Form Footer Strip */}
            <div className="form-meta-footer">
              <div className="security-badge">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Direct Association Registry | Privacy Protected</span>
              </div>
              <div className="social-links-strip">
                <a
                  href="https://wa.me/919942375000"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn whatsapp"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </a>
                <a
                  href="tel:+919942375000"
                  className="social-icon-btn phone"
                  title="Direct Phone Call"
                  aria-label="Direct Phone Call"
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

      {/* Association Technical FAQ Section */}
      <section className="association-faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-eyebrow">Technical Advisory & Guidelines</span>
            <h2 className="faq-title">Frequently Asked Association Questions</h2>
            <p className="faq-desc">Answers to common inquiries regarding standards, compressive testing, and procurement.</p>
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

      {/* Geographic Factory Map Section */}
      <section className="contact-map-wrapper">
        <div className="map-header-block">
          <span className="map-eyebrow">On-Site Visit & Direct Plant Loading</span>
          <h2 className="map-title">SMT Manufacturing Locations</h2>
          <p className="map-desc">Visit our automated casting plants in Perundurai (Erode) & Puducherry for live sample testing and truck loading.</p>
        </div>
        <GoogleMap />
      </section>

      <FooterComponent />
    </div>
  );
};

export default ContactPage;
