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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // PLACEHOLDERS: The user will need to replace these with their actual EmailJS keys.
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
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${bgImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
      <NavBar />
      <div className="contact-page-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2 className="section-title">Your details</h2>

          <div className="form-grid">
            <div className="input-group">
              <label>Full name<span className="required">*</span></label>
              <input type="text" name="user_name" placeholder="Enter full name" required />
            </div>
            <div className="input-group">
              <label>Phone number<span className="required">*</span></label>
              <div className="phone-input">
                <span className="country-code">🇮🇳 +91</span>
                <input type="tel" name="user_phone" placeholder="Enter phone number" required />
              </div>
            </div>
            <div className="input-group">
              <label>Email address<span className="required">*</span></label>
              <input type="email" name="user_email" placeholder="Enter email address" required />
            </div>
            <div className="input-group">
              <label>Enquire type</label>
              <select name="enquiry_type">
                <option value="General Inquiry">Select</option>
                <option value="Product Details">Product Details</option>
                <option value="Pricing">Pricing</option>
              </select>
            </div>
          </div>

          <h2 className="section-title">How can we help?<span className="required">*</span></h2>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="How can we help?"
              maxLength={500}
              required
              rows={6}
            ></textarea>
            <div className="char-limit">Maximum character limit - 500</div>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="agree" name="agree" required />
            <label htmlFor="agree">I would agree to receive emails & calls from SMT team</label>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}
          </button>
          <br />
          <br />
          {submitStatus === 'success' && <p className="status-message success">Message sent successfully!</p>}
          {submitStatus === 'error' && <p className="status-message error">Failed to send message. Check EmailJS config.</p>}

          <div className="contact-details-footer">
            <p>
              To know more reach us at &nbsp;
              <span className="contact-icon" style={{ color: '#f5c46a', marginRight: '8px' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <span>+91 99423 75000</span>
              &nbsp;&nbsp;&nbsp;
              <span className="contact-icon" style={{ color: '#f5c46a', marginRight: '8px' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <span>smtflyashbricks@gmail.com</span>
            </p>
            <div className="social-links">
            
              <a href="#" className="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/919942375000" target="_blank" rel="noreferrer" className="whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
              <a href="#" className="linkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

        </form>
      </div>
      <div className="contact-map-wrapper">
        <GoogleMap></GoogleMap>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default ContactPage;
