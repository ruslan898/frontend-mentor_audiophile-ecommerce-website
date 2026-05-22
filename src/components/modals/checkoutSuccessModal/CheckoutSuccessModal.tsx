import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../ui/button/Button';
import Title from '../../ui/title/Title';
import styles from './CheckoutSuccessModal.module.scss';
import iconOrderConfirmation from '/assets/checkout/icon-order-confirmation.svg';
import { useModalContext } from '../../../context/modal/ModalContext';
import { useCartContext } from '../../../context/cart/CartContext';
import { getShortItemName } from '../../../utils/utils';

export default function CheckoutSuccessModal() {
  const { openModal } = useModalContext();
  const navigate = useNavigate();
  const { cart, cartItemsCount, grandTotal, dispatch } = useCartContext();

  const [orderList, setOrderList] = useState<'short' | 'expanded'>('short');

  const itemsList =
    orderList === 'short' ? cart.items.slice(0, 1) : cart.items.slice(0);

  function toggleOrderList() {
    setOrderList((prevVal) => (prevVal === 'short' ? 'expanded' : 'short'));
  }

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
          {itemsList.map((cartItem) => {
            const { id, image, name, price, quantity } = cartItem;

            return (
              <div className={styles.product} key={id}>
                <img
                  src={image}
                  alt={`An image of ${name}`}
                  className={styles.productImg}
                />
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>
                    {getShortItemName(name)}
                  </h3>
                  <p className={styles.productPrice}>
                    $ {price.toLocaleString('en-US')}
                  </p>
                </div>
                <span className={styles.productAmount}>x{quantity}</span>
              </div>
            );
          })}
          <hr className={styles.divider} />
          <button className={styles.otherProducts} onClick={toggleOrderList}>
            {orderList === 'short'
              ? `and ${cartItemsCount - 1} other item(s)`
              : 'Show less'}
          </button>
        </div>
        <div className={styles.orderPrice}>
          <h3 className={styles.totalPriceText}>Grand total</h3>
          <p className={styles.totalPriceValue}>$ {grandTotal}</p>
        </div>
      </div>
      <Button
        type="button"
        variant="filled"
        className={styles.modalBtn}
        onClick={() => {
          openModal('center');
          navigate('/');
          dispatch({ type: 'clear-cart' });
        }}
      >
        Back to home
      </Button>
    </div>
  );
}
