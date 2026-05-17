import FormSection from './formSection/FormSection';
import Input from '../ui/input/Input';
import styles from './Form.module.scss';
import CartItem from '../ui/cartItem/CartItem';
import Button from '../ui/button/Button';

export default function Form() {
  return (
    <form className={styles.form}>
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
                    name="phone-number"
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
                    type="number"
                    name="zip-code"
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
                  <Input type="radio" name="payment-method" label="e-Money" />
                  <Input
                    type="radio"
                    name="payment-method"
                    label="Cash on Delivery"
                  />
                </div>
              </FormSection>
              <div className={styles.inputGrid}>
                <Input
                  type="number"
                  name="e-money-num"
                  placeholder="238521993"
                  label="e-Money Number"
                />
                <Input
                  type="number"
                  name="e-money-pin"
                  placeholder="6891"
                  label="e-Money PIN"
                />
              </div>
            </div>
          </div>

          <div className={styles.orderSummary}>
            <h2 className={styles.summaryTitle}>Summary</h2>
            <ul className={styles.orderItems}>
              <li>
                <CartItem variant="checkout" />
              </li>
              <li>
                <CartItem variant="checkout" />
              </li>
              <li>
                <CartItem variant="checkout" />
              </li>
            </ul>
            <ul className={styles.orderInfo}>
              <li>
                <span className={styles.orderInfoText}>Total</span>
                <span className={styles.orderInfoValue}>$ 5,396</span>
              </li>
              <li>
                <span className={styles.orderInfoText}>Shipping</span>
                <span className={styles.orderInfoValue}>$ 50</span>
              </li>
              <li>
                <span className={styles.orderInfoText}>VAT (included)</span>
                <span className={styles.orderInfoValue}>$ 1,079</span>
              </li>
              <li>
                <span className={styles.orderInfoText}>Grand total</span>
                <span className={styles.orderInfoValue}>$ 5,446</span>
              </li>
            </ul>
            <Button
              type="button"
              variant="filled"
              className={styles.checkoutBtn}
            >
              Continue & pay
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
