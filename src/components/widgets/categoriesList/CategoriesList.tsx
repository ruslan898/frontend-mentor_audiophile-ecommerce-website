import CategoryCard from '../categoryCard/CategoryCard';
import styles from './CategoriesList.module.scss';
import categoryIconHeadphones from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import categoryIconSpeakers from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import categoryIconEarphones from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png';

export default function CategoriesList() {
  return (
    <section className={styles.categoriesList}>
      <div className="container">
        <div className={styles.categoriesListWrapper}>
          <CategoryCard imgUrl={categoryIconHeadphones} title="Headphones" />
          <CategoryCard imgUrl={categoryIconSpeakers} title="Speakers" />
          <CategoryCard imgUrl={categoryIconEarphones} title="Earphones" />
        </div>
      </div>
    </section>
  );
}
