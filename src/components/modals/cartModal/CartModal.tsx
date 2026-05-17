import { useModalContext } from '../../../context/modal/ModalContext';
import Button from '../../ui/button/Button';
import CartItem from '../../ui/cartItem/CartItem';
import Title from '../../ui/title/Title';
import styles from './CartModal.module.scss';

export default function CartModal() {
  const {toggleOpen} = useModalContext()

  return (
    <div className={styles.cartModal}>
      <div className={styles.header}>
        <Title level={4} variant="sm" className={styles.title}>
          Cart (3)
        </Title>
        <button type="button" className={styles.clearCartBtn}>
          Remove all
        </button>
      </div>
      <ul className={styles.productsList}>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
      </ul>
      <div className={styles.summary}>
        <div className={styles.total}>
          <span className={styles.totalText}>Total</span>
          <span className={styles.totalPrice}>$ 5,396</span>
        </div>
      </div>
      <Button
        href="/checkout"
        variant="filled"
        className={styles.cartBtn}
        onClick={toggleOpen}
      >
        Checkout
      </Button>
    </div>
  );
}
