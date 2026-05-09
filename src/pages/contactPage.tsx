import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/navbar';
import FooterComponent from '../components/footer';
import GoogleMap from '../components/maps';

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
      </div>
      <GoogleMap></GoogleMap>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default ContactPage;
