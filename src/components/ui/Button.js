import styles from '../../styles/Layout.module.css';

export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button 
      className={styles.button} 
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}