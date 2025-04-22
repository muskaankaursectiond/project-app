import { useAppContext } from '../../contexts/AppContext';
import Button from '../ui/Button';
import Card from '../ui/Card';
import styles from '../../styles/Home.module.css';

export default function ProductList({ products }) {
  const { addToCart } = useAppContext();

  return (
    <div className={styles.productGrid}>
      {products.map(product => (
        <Card key={product.id} title={product.name}>
          <p>Price: ${product.price}</p>
          <div className={styles.productActions}>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}