import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

const productData = {
  1: { name: 'Product 1', price: 19.99, description: 'Description for Product 1' },
  2: { name: 'Product 2', price: 29.99, description: 'Description for Product 2' },
  3: { name: 'Product 3', price: 39.99, description: 'Description for Product 3' },
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = productData[id];

  if (!product) {
    return (
      <div className={styles.container}>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button 
        onClick={() => router.push('/products')}
        className={styles.button}
      >
        Back to Products
      </button>
    </div>
  );
}