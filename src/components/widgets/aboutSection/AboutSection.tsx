import { useWindowWidth } from '../../../hooks/useWindowWidth';
import Title from '../../ui/title/Title';
import styles from './AboutSection.module.scss';
import imageBestGearMobile from '/assets/shared/mobile/image-best-gear.jpg';
import imageBestGearTablet from '/assets/shared/tablet/image-best-gear.jpg';
import imageBestGearDesktop from '/assets/shared/desktop/image-best-gear.jpg';

export default function AboutSection() {
  const windowWidth = useWindowWidth();

  const sectionImage =
    windowWidth < 768
      ? imageBestGearMobile
      : windowWidth < 1024
        ? imageBestGearTablet
        : imageBestGearDesktop;

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutSectionWrapper}>
          <div className={styles.imageBox}>
            <img
              src={sectionImage}
              alt="A man listening to music wearing headphones"
            />
          </div>
          <div className={styles.description}>
            <Title level={2} variant="lg">
              Bringing you the <span>best</span> audio gear
            </Title>
            <p className={styles.text}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
