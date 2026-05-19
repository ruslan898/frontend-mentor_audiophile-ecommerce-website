import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../../../context/modal/ModalContext';
import { useCartContext } from '../../../context/cart/CartContext';
import Button from '../../ui/button/Button';
import CartItem from '../../ui/cartItem/CartItem';
import Title from '../../ui/title/Title';
import styles from './CartModal.module.scss';

export default function CartModal() {
  const { toggleOpen } = useModalContext();
  const { cart, cartItemsCount, cartItemsTotal, dispatch } = useCartContext();
  const navigate = useNavigate();

  const cartEmpty = cart.items.length === 0;

  return (
    <div className={styles.cartModal}>
      <div className={styles.header}>
        <Title level={4} variant="sm" className={styles.title}>
          Cart ({cartItemsCount})
        </Title>
        {!cartEmpty && <button
          type="button"
          className={styles.clearCartBtn}
          onClick={() => dispatch({ type: 'clear-cart' })}
        >
          Remove all
        </button>}
      </div>
      <ul className={styles.productsList}>
        {!cartEmpty ? (
          cart.items.map((cartItem) => {
            const { id, ...props } = cartItem;
            return (
              <li key={id}>
                <CartItem
                  variant="cart"
                  id={id}
                  onClick={dispatch}
                  {...props}
                />
              </li>
            );
          })
        ) : (
          <p className={styles.emptyCartMessage}>Your cart is empty</p>
        )}
      </ul>
      <div className={styles.summary}>
        <div className={styles.total}>
          <span className={styles.totalText}>Total</span>
          <span className={styles.totalPrice}>
            $ {cartItemsTotal.toLocaleString('en-US')}
          </span>
        </div>
      </div>
      <Button
        type="button"
        variant="filled"
        className={styles.cartBtn}
        onClick={() => {
          toggleOpen();
          navigate(cartEmpty ? '/' : '/checkout');
        }}
      >
        {cartEmpty ? 'Go to homepage' : 'Checkout'}
      </Button>
    </div>
  );
}
