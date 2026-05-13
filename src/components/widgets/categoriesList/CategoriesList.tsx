import CategoryCard from '../categoryCard/CategoryCard';
import styles from './CategoriesList.module.scss';
import categoryIconHeadphones from '/assets/shared/desktop/image-category-thumbnail-headphones.png';
import categoryIconSpeakers from '/assets/shared/desktop/image-category-thumbnail-speakers.png';
import categoryIconEarphones from '/assets/shared/desktop/image-category-thumbnail-earphones.png';

export default function CategoriesList() {
  return (
    <div className={styles.categoriesListWrapper}>
      <div className="container">
        <ul className={styles.categoriesList}>
          <li>
            <CategoryCard
              href="/category/headphones"
              imgUrl={categoryIconHeadphones}
              title="Headphones"
            />
          </li>
          <li>
            <CategoryCard
              href="/category/speakers"
              imgUrl={categoryIconSpeakers}
              title="Speakers"
            />
          </li>
          <li>
            <CategoryCard
              href="/category/earphones"
              imgUrl={categoryIconEarphones}
              title="Earphones"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
