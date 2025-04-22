import dynamic from 'next/dynamic';
import styles from '../../styles/Home.module.css';

const ProductList = dynamic(() => import('../../components/features/ProductList'));

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

export default function Products() {
  return (
    <div className={styles.container}>
      <h1>Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}