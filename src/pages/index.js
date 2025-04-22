import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const featuredProducts = [
    { id: 1, name: 'Premium Widget', price: 49.99 },
    { id: 2, name: 'Deluxe Gadget', price: 79.99 },
    { id: 3, name: 'Ultimate Tool', price: 99.99 }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at unbeatable prices</p>
        <button 
          onClick={() => setCounter(counter + 1)}
          className={styles.ctaButton}
        >
          Click Me ({counter})
        </button>
      </section>

      {/* Featured Products */}
      <section className={styles.section}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {featuredProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className={styles.button}>View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* About Summary */}
      <section className={styles.section}>
        <h2>Why Choose Us?</h2>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3>Fast Shipping</h3>
            <p>Get your products within 2-3 business days</p>
          </div>
          <div className={styles.featureCard}>
            <h3>24/7 Support</h3>
            <p>Our team is always ready to help you</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Quality Guarantee</h3>
            <p>30-day money back guarantee</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={styles.newsletter}>
        <h2>Stay Updated</h2>
        <form className={styles.newsletterForm}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className={styles.newsletterInput}
            required
          />
          <button type="submit" className={styles.ctaButton}>
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}