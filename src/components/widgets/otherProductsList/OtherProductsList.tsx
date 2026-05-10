import ProductCard from '../productCard/ProductCard';
import styles from './OtherProductsList.module.scss';

export default function OtherProductsList() {
  return (
    <ul className={styles.otherProductsList}>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
    </ul>
  );
}
