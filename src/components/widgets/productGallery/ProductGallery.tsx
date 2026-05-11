import styles from './ProductGallery.module.scss';
import img1 from '/assets/product-xx59-headphones/mobile/image-gallery-1.jpg';
import img2 from '/assets/product-xx59-headphones/mobile/image-gallery-2.jpg';
import img3 from '/assets/product-xx59-headphones/mobile/image-gallery-3.jpg';

export default function ProductGallery() {
  return (
    <div className={styles.productGallery}>
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
  );
}
