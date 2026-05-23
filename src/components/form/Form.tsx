import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormSection from './formSection/FormSection';
import Input from '../ui/input/Input';
import styles from './Form.module.scss';
import CartItem from '../ui/cartItem/CartItem';
import Button from '../ui/button/Button';
import { useModalContext } from '../../context/modal/ModalContext';
import { useCartContext } from '../../context/cart/CartContext';
import cashPaymentIcon from '/assets/checkout/icon-cash-on-delivery.svg';

export default function CheckoutForm() {
  const { openModal } = useModalContext();
  const { cart, cartItemsTotal, SHIPPING_PRICE, vatValue, grandTotal } =
    useCartContext();

  const cartEmpty = cart.items.length === 0;

  const ValidationSchema = Yup.object({
    name: Yup.string()
      .required('Required')
      .min(2, 'At least 2 characters')
      .max(50, 'Maximum 50 characters'),
    email: Yup.string().required('Required').email('Invalid email'),
    tel: Yup.string()
      .required('Required')
      .min(2, 'At least 2 characters')
      .max(50, 'Maximum 50 characters'),
    address: Yup.string()
      .required('Required')
      .min(2, 'At least 2 characters')
      .max(50, 'Maximum 50 characters'),
    zipCode: Yup.string()
      .required('Required')
      .min(2, 'At least 2 characters')
      .max(50, 'Maximum 50 characters'),
    city: Yup.string()
      .required('Required')
      .min(2, 'At least 2 characters')
      .max(50, 'Maximum 50 characters'),
    country: Yup.string()
      .required('Required')
      .min(2, 'At least 2 characters')
      .max(50, 'Maximum 50 characters'),
    paymentMethod: Yup.string().required(),
    eMoneyNum: Yup.string().when('paymentMethod', {
      is: 'e-money',
      then: (schema) =>
        schema
          .required('Required')
          .min(2, 'At least 2 characters')
          .max(50, 'Maximum 50 characters'),
    }),
    eMoneyPin: Yup.string().when('paymentMethod', {
      is: 'e-money',
      then: (schema) =>
        schema
          .required('Required')
          .min(2, 'At least 2 characters')
          .max(50, 'Maximum 50 characters'),
    }),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        tel: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        paymentMethod: 'e-money',
        eMoneyNum: '',
        eMoneyPin: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={(_, { resetForm }) => {
        openModal('center');
        resetForm();
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className={styles.form}>
          <div className="container">
            <div className={styles.formWrapper}>
              <div className={styles.formInner}>
                <h1 className={styles.pageTitle}>Checkout</h1>
                <div className={styles.formContent}>
                  <FormSection title="Billing details">
                    <div className={styles.inputGrid}>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Alexei Ward"
                        label="Name"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="alexei@mail.com"
                        label="Email Address"
                      />
                      <Input
                        type="tel"
                        name="tel"
                        placeholder="+1 202-555-0136"
                        label="Phone Number"
                      />
                    </div>
                  </FormSection>
                  <FormSection title="Shipping info">
                    <div className={styles.inputGrid}>
                      <div className={styles.inputBig}>
                        <Input
                          type="text"
                          name="address"
                          placeholder="1137 Williams Avenue"
                          label="Your Address"
                        />
                      </div>
                      <Input
                        type="text"
                        name="zipCode"
                        placeholder="10001"
                        label="ZIP Code"
                      />
                      <Input
                        type="text"
                        name="city"
                        placeholder="New York"
                        label="City"
                      />
                      <Input
                        type="text"
                        name="country"
                        placeholder="United States"
                        label="Country"
                      />
                    </div>
                  </FormSection>
                  <FormSection title="Payment details">
                    <div className={styles.inputGrid}>
                      <h2 className={styles.radioTitle}>Payment Method</h2>
                      <Input
                        type="radio"
                        name="paymentMethod"
                        label="e-Money"
                        value="e-money"
                      />
                      <Input
                        type="radio"
                        name="paymentMethod"
                        label="Cash on Delivery"
                        value="cash"
                      />
                    </div>
                  </FormSection>
                  {values.paymentMethod === 'e-money' ? (
                    <div className={styles.inputGrid}>
                      <Input
                        type="text"
                        name="eMoneyNum"
                        placeholder="238521993"
                        label="e-Money Number"
                      />
                      <Input
                        type="text"
                        name="eMoneyPin"
                        placeholder="6891"
                        label="e-Money PIN"
                      />
                    </div>
                  ) : (
                    <div className={styles.cashPaymentDescr}>
                      <img
                        src={cashPaymentIcon}
                        alt="Cash on delivery icon"
                        className={styles.cashPaymentIcon}
                      />
                      <p className={styles.cashPaymentText}>
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.orderSummary}>
                <h2 className={styles.summaryTitle}>Summary</h2>
                <ul className={styles.orderItems}>
                  {cart.items.map((cartItem) => {
                    return (
                      <li key={cartItem.id}>
                        <CartItem variant="checkout" {...cartItem} />
                      </li>
                    );
                  })}
                </ul>
                <ul className={styles.orderInfo}>
                  <li>
                    <span className={styles.orderInfoText}>Total</span>
                    <span className={styles.orderInfoValue}>
                      $ {cartItemsTotal.toLocaleString('en-US')}
                    </span>
                  </li>
                  <li>
                    <span className={styles.orderInfoText}>Shipping</span>
                    <span className={styles.orderInfoValue}>
                      $ {SHIPPING_PRICE}
                    </span>
                  </li>
                  <li>
                    <span className={styles.orderInfoText}>VAT (included)</span>
                    <span className={styles.orderInfoValue}>$ {vatValue}</span>
                  </li>
                  <li>
                    <span className={styles.orderInfoText}>Grand total</span>
                    <span className={styles.orderInfoValue}>
                      $ {grandTotal}
                    </span>
                  </li>
                </ul>
                <Button
                  type="submit"
                  variant="filled"
                  className={styles.checkoutBtn}
                  disabled={isSubmitting || cartEmpty}
                >
                  Continue & pay
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
