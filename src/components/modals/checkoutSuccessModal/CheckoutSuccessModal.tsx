import Button from '../../ui/button/Button';
import Title from '../../ui/title/Title';
import styles from './CheckoutSuccessModal.module.scss';
import iconOrderConfirmation from '/assets/checkout/icon-order-confirmation.svg';
import productImg from '/assets/cart/image-xx99-mark-two-headphones.jpg';

export default function CheckoutSuccessModal() {
  return (
    <div className={styles.checkoutSuccessModal}>
      <img
        src={iconOrderConfirmation}
        alt="Order confirmation icon"
        className={styles.orderConfirmationIcon}
      />
      <Title level={2} variant="md-24" className={styles.modalTitle}>
        Thank you for your order
      </Title>
      <p className={styles.modalSubtitle}>
        You will receive an email confirmation shortly.
      </p>
      <div className={styles.orderDetails}>
        <div className={styles.orderedProducts}>
          <div className={styles.product}>
            <img
              src={productImg}
              alt="An image of an ordered product"
              className={styles.productImg}
            />
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>XX99 MK II</h3>
              <p className={styles.productPrice}>$ 2,999</p>
            </div>
            <span className={styles.productAmount}>x1</span>
          </div>
          <hr className={styles.divider} />
          <p className={styles.otherProducts}>and 2 other item(s)</p>
        </div>
        <div className={styles.orderPrice}>
          <h3 className={styles.totalPriceText}>Grand total</h3>
          <p className={styles.totalPriceValue}>$ 5,446</p>
        </div>
      </div>
      <Button href="/" variant="filled" className={styles.modalBtn}>
        Back to home
      </Button>
    </div>
  );
}
