import CartAmount from '../cartAmount/CartAmount';
import styles from './CartItem.module.scss';
import cartItemImg from '/assets/cart/image-xx99-mark-two-headphones.jpg';

type CartItemProps = {
  variant: 'cart' | 'checkout';
};

export default function CartItem({ variant }: CartItemProps) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.info}>
        <img
          src={cartItemImg}
          alt="An image of a product"
          className={styles.cartItemImg}
        />
        <div className={styles.textBlock}>
          <h5 className={styles.title}>XX99 MK II</h5>
          <p className={styles.price}>$ 2,999</p>
        </div>
      </div>
      {variant === 'cart' ? (
        <CartAmount variant="cartModal" />
      ) : (
        <span>x1</span>
      )}
    </div>
  );
}
