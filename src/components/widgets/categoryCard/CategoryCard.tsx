import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import styles from './CategoryCard.module.scss';
import categoryIconHeadphones from '/assets/shared/desktop/image-category-thumbnail-headphones.png';
import iconArrowRight from '/assets/shared/desktop/icon-arrow-right.svg';

type CategoryCardProps = {
  imgUrl: string;
  title: string;
};

export default function CategoryCard({
  imgUrl = categoryIconHeadphones,
  title = 'Headphones',
}: CategoryCardProps) {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryCardInner}>
        <img
          src={imgUrl}
          alt="Category icon"
          className={styles.categoryCardImg}
        />
        <Title level={2} variant="sm">
          {title}
        </Title>
        <Button variant="text">
          Shop
          <img src={iconArrowRight} alt="Arrow right" />
        </Button>
      </div>
    </div>
  );
}
