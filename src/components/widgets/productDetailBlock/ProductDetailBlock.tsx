import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import styles from './ProductDetailBlock.module.scss';
import imageMobile from '../../../assets/product-zx9-speaker/mobile/image-product.jpg';
import imageTablet from '../../../assets/product-zx9-speaker/tablet/image-product.jpg';
import imageDesktop from '../../../assets/product-zx9-speaker/desktop/image-product.jpg';
import { useWindowWidth } from '../../../hooks/useWindowWidth';

export default function ProductDetailBlock() {
  const windowWidth = useWindowWidth();

  const image =
    windowWidth < 768
      ? imageMobile
      : windowWidth < 1024
        ? imageTablet
        : imageDesktop;

  return (
    <section className={styles.productDetailBlock}>
      <div className={styles.top}>
        <div className={styles.imageBox}>
          <img src={image} alt="An image of speakers" />
        </div>
        <div className={styles.description}>
          <div className={styles.productInfo}>
            <div className={styles.header}>
              <p className={styles.subtitle}>New product</p>
              <Title level={1} variant="md-28" className={styles.productTitle}>
                ZX9 SPEAKER
              </Title>
            </div>
            <p className={styles.productDescription}>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <p className={styles.price}>$ 4,500</p>
          </div>

          <div className={styles.actions}>
            <div className={styles.amount}>
              <button type="button" className={styles.amountBtn}>
                -
              </button>
              <span className={styles.amountNumber}>1</span>
              <button type="button" className={styles.amountBtn}>
                +
              </button>
            </div>
            <Button variant="filled">Add to cart</Button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.features}>
          <Title level={2} variant="md-24" className={styles.featuresTitle}>
            Features
          </Title>
          <p className={styles.featuresText}>
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m). Discover
            clear, more natural sounding highs than the competition with ZX9’s
            signature planar diaphragm tweeter. Equally important is its
            powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass
            unit. You’ll be able to enjoy equal sound quality whether in a large
            room or small den. Furthermore, you will experience new sensations
            from old songs since it can respond to even the subtle waveforms.
          </p>
        </div>
        <div className={styles.set}>
          <Title level={2} variant="md-24" className={styles.setTitle}>
            In the box
          </Title>
          <ul className={styles.itemsList}>
            <li className={styles.item}>
              <span className={styles.quantity}>2x</span>
              <span className={styles.itemName}>Speaker Unit</span>
            </li>
            <li className={styles.item}>
              <span className={styles.quantity}>2x</span>
              <span className={styles.itemName}>Speaker Cloth Panel</span>
            </li>
            <li className={styles.item}>
              <span className={styles.quantity}>1x</span>
              <span className={styles.itemName}>User Manual</span>
            </li>
            <li className={styles.item}>
              <span className={styles.quantity}>1x</span>
              <span className={styles.itemName}>3.5mm 10m Audio Cable</span>
            </li>
            <li className={styles.item}>
              <span className={styles.quantity}>1x</span>
              <span className={styles.itemName}>10m Optical Cable</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
