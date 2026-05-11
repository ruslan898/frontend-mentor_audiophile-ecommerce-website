import styles from './SocialLinks.module.scss';
import facebookIcon from '/assets/shared/desktop/icon-facebook.svg';
import twitterIcon from '/assets/shared/desktop/icon-twitter.svg';
import instagramIcon from '/assets/shared/desktop/icon-instagram.svg';

export default function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      <li>
        <a href="https://www.facebook.com/">
          <img src={facebookIcon} alt="Facebook icon" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <img src={instagramIcon} alt="Instagram icon" />
        </a>
      </li>
    </ul>
  );
}
