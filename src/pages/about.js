import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.aboutHero}>
        <h1>About Our Company</h1>
        <p className={styles.heroSubtitle}>Building trust through quality products and exceptional service since 2010</p>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2>Our Story</h2>
          <p>
            Founded in 2010, we started as a small team with a big vision - to revolutionize the e-commerce 
            experience. What began as a modest online store has grown into a trusted platform serving thousands 
            of satisfied customers worldwide.
          </p>
          <p>
            Our journey hasn't always been easy, but our commitment to quality and customer satisfaction has 
            remained unwavering. Today, we're proud to offer a curated selection of premium products that we 
            personally stand behind.
          </p>
        </div>
        <div className={styles.aboutImage}>
          {/* Replace with your actual image path */}
          <img src="/images/about-team.jpg" alt="Our team working together" />
        </div>
      </section>

      <section className={styles.missionSection}>
        <h2>Our Mission & Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Quality First</h3>
            <p>We rigorously test every product to ensure it meets our high standards before offering it to you.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Customer Focus</h3>
            <p>Your satisfaction is our top priority. We're here to help before, during, and after your purchase.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Sustainable Growth</h3>
            <p>We believe in responsible business practices that benefit our customers, community, and environment.</p>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>Meet The Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}></div>
            <h3>Anmol Jaswal</h3>
            <p>Founder & CEO</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}></div>
            <h3>Muskan Kaur</h3>
            <p>Head of Product</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}></div>
            <h3>Prateek Chauhan</h3>
            <p>Customer Experience</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Experience the Difference?</h2>
        <button className={styles.ctaButton}>Shop Our Products</button>
      </section>
    </div>
  );
}