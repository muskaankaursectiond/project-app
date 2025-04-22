import { useAppContext } from '../../contexts/AppContext';
import styles from '../../styles/Home.module.css';

export default function UserProfile() {
  const { theme, toggleTheme, cart } = useAppContext();

  return (
    <div className={styles.container}>
      <h1>User Profile</h1>
      <div className={styles.card}>
        <h2>Preferences</h2>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme} className={styles.button}>
          Toggle Theme
        </button>
        
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}