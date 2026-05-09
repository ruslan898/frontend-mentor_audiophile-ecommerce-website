import Header from '../header/Header';
import Title from '../../ui/title/Title';
import Button from '../../ui/button/Button';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import styles from './HeroSection.module.scss';
import heroImageMobile from '../../../assets/home/mobile/image-header.jpg';
import heroImageTablet from '../../../assets/home/tablet/image-header.jpg';
import heroImageDesktop from '../../../assets/home/desktop/image-hero.jpg';

export default function HeroSection() {
  const windowWidth = useWindowWidth();
  const bgImage =
    windowWidth < 768
      ? heroImageMobile
      : windowWidth < 1024
        ? heroImageTablet
        : heroImageDesktop;

  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className={styles.heroSectionWrapper}>
          <Header />
          <div className={styles.textBlock}>
            <p className={styles.overline}>New product</p>
            <Title level={1} variant="xl" className={styles.title}>
              XX99 Mark II Headphones
            </Title>
            <p className={styles.description}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <Button variant="filled">See product</Button>
        </div>
      </div>
    </section>
  );
}
