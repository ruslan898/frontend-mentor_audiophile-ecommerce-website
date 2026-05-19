import CartAmount from '../cartAmount/CartAmount';
import styles from './CartItem.module.scss';
import type { Action } from '../../../context/cart/CartProvider';
import { getShortItemName } from '../../../utils/utils';

type BaseCartItemProps = {
  variant: 'cart' | 'checkout';
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  onClick: React.Dispatch<Action>;
};

type CartItemProps =
  | ({
      variant: 'cart';
    } & BaseCartItemProps)
  | ({
      variant: 'checkout';
    } & Omit<BaseCartItemProps, 'onClick'>);

export default function CartItem(props: CartItemProps) {
  const { variant, id, image, name, price, quantity } = props;
  const shortItemName = getShortItemName(name);

  return (
    <div className={styles.cartItem}>
      <div className={styles.info}>
        <img
          src={image}
          alt={`An image of ${name}`}
          className={styles.cartItemImg}
        />
        <div className={styles.textBlock}>
          <h5 className={styles.title}>{shortItemName}</h5>
          <p className={styles.price}>$ {price.toLocaleString('en-US')}</p>
        </div>
      </div>
      {variant === 'cart' ? (
        <CartAmount
          variant="cartModal"
          id={id}
          count={quantity}
          onCountChange={props.onClick}
        />
      ) : (
        <span>x{quantity}</span>
      )}
    </div>
  );
}
