import { useImageByScreenSize } from '../../../hooks/useImageByScreenSize';
import type { ImagePaths } from '../../../types/types';
import styles from './ProductGallery.module.scss';

type ProductGalleryProps = {
  imagesObj: {
    first: ImagePaths;
    second: ImagePaths;
    third: ImagePaths;
  };
};

export default function ProductGallery({ imagesObj }: ProductGalleryProps) {
  const { first, second, third } = imagesObj;

  const img1 = useImageByScreenSize(first);
  const img2 = useImageByScreenSize(second);
  const img3 = useImageByScreenSize(third);

  return (
    <div className={styles.productGallery}>
      <div className="container">
        <div className={styles.productGalleryWrapper}>
          <div className={styles.galleryTile}>
            <img src={img1} alt="Img1" />
          </div>
          <div className={styles.galleryTile}>
            <img src={img2} alt="Img2" />
          </div>
          <div className={`${styles.galleryTile} ${styles.big}`}>
            <img src={img3} alt="Img3" />
          </div>
        </div>
      </div>
    </div>
  );
}
