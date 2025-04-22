import styles from '../../styles/Layout.module.css';

export default function Card({ children, title }) {
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}