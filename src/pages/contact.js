import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! Your message has been sent.`
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.contactHeader} aria-labelledby="contact-heading">
        <h1 id="contact-heading">Contact Us</h1>
        <p className={styles.contactSubtitle}>Have questions? We're here to help!</p>
      </section>

      <div className={styles.contactWrapper}>
        <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
          {submitStatus && (
            <div className={`${styles.alert} ${styles[submitStatus.type]}`}>
              {submitStatus.message}
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              aria-required="true"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              aria-required="true"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows="5"
              required
              aria-required="true"
              disabled={isSubmitting}
            />
          </div>

          <button 
            type="submit" 
            className={styles.contactSubmit}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                <span className="sr-only">Sending...</span>
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        <div className={styles.contactInfo}>
          <h2>Other Ways to Reach Us</h2>
          
          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            </div>
            <div className={styles.contactMethodContent}>
              <h3>Email</h3>
              <p>
                <a href="mr.prateek@gmail.com" className={styles.contactLink}>
                  mr.prateek@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db">
                <path d="M22 16.92v3.02a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3.02a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className={styles.contactMethodContent}>
              <h3>Phone</h3>
              <p>
                <a href="tel:+6479612612" className={styles.contactLink}>
                  +1 (555) 123-4567
                </a>
              </p>
            </div>
          </div>

          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className={styles.contactMethodContent}>
              <h3>Address</h3>
              <address className={styles.contactAddress}>
                123 Gondala Crescent<br />
                City, State L6P 2X6
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}