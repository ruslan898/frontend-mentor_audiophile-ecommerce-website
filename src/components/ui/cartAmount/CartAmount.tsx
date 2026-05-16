import styles from './CartAmount.module.scss'

type CartAmount = {
  variant: 'regular' | 'cartModal'
}

export default function CartAmount({variant = 'regular'}) {
  return (
    <div className={`${styles.cartAmount} ${styles[variant]}`}>
      <button type="button" className={styles.cartAmountBtn}>
        -
      </button>
      <span className={styles.cartAmountNumber}>1</span>
      <button type="button" className={styles.cartAmountBtn}>
        +
      </button>
    </div>
  );
}