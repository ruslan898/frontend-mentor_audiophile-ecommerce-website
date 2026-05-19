import styles from './CartAmount.module.scss';
import type { Action } from '../../../context/cart/CartProvider';

type CartAmountProps =
  | {
      variant: 'regular';
      count: number;
      onCountChange: (count: number) => void;
    }
  | {
      variant: 'cartModal';
      id: number;
      count: number;
      onCountChange: React.Dispatch<Action>;
    };

export default function CartAmount(props: CartAmountProps) {
  const { variant, count, onCountChange } = props;

  if (variant === 'cartModal') {
    return (
      <div className={`${styles.cartAmount} ${styles[variant]}`}>
        <button
          type="button"
          className={styles.cartAmountBtn}
          onClick={() =>
            onCountChange({
              type: 'upd-item-qty',
              payload: {
                id: props.id,
                variant: 'decr',
              },
            })
          }
        >
          -
        </button>
        <span className={styles.cartAmountNumber}>{count}</span>
        <button
          type="button"
          className={styles.cartAmountBtn}
          onClick={() =>
            onCountChange({
              type: 'upd-item-qty',
              payload: {
                id: props.id,
                variant: 'incr',
              },
            })
          }
        >
          +
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.cartAmount} ${styles[variant]}`}>
      <button
        type="button"
        className={styles.cartAmountBtn}
        onClick={() => onCountChange(count - 1)}
        disabled={count === 1}
      >
        -
      </button>
      <span className={styles.cartAmountNumber}>{count}</span>
      <button
        type="button"
        className={styles.cartAmountBtn}
        onClick={() => onCountChange(count + 1)}
      >
        +
      </button>
    </div>
  );
}
