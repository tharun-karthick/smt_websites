import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/navbar';
import FooterComponent from '../components/footer';

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
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

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
    <div>
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
                <option value="Partnership">Partnership</option>
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

          {submitStatus === 'success' && <p className="status-message success">Message sent successfully!</p>}
          {submitStatus === 'error' && <p className="status-message error">Failed to send message. Check EmailJS config.</p>}

        </form>

        {/* <div className="contact-footer">
          <span>To know more reach us at</span>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <a href="tel:+919942375000">+91 99423 75000</a>
          </div>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:smtflyashbricks@gmail.com">smtflyashbricks@gmail.com</a>
          </div>
        </div> */}
      </div>
      <iframe className='mapsContainer'
        src="https://maps.google.com/maps?q=SMT+FLYASH+BRICKS&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="98%"
        height="400px"
        style={{ border: 0 }}
        title="SMT Flyash Bricks Location"
      ></iframe>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default ContactPage;
