import CategoryCard from '../categoryCard/CategoryCard';
import styles from './CategoriesList.module.scss';
import categoryIconHeadphones from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import categoryIconSpeakers from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import categoryIconEarphones from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png';

export default function CategoriesList() {
  return (
    <ul className={styles.categoriesList}>
      <li>
        <CategoryCard imgUrl={categoryIconHeadphones} title="Headphones" />
      </li>
      <li>
        <CategoryCard imgUrl={categoryIconSpeakers} title="Speakers" />
      </li>
      <li>
        <CategoryCard imgUrl={categoryIconEarphones} title="Earphones" />
      </li>
    </ul>
  );
}
