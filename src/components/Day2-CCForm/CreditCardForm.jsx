import styles from "./CreditCardForm.module.css";

function CreditCardForm() {
  return (
    <div className={styles.ccMain}>
      <div className={styles.billing}>
        <form className={styles.billingForm}>
          <label for="fname"> Full Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="John M. Doe"
          />
          <label for="email"> Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="john@example.com"
          />
          <label for="adr"> Address</label>
          <input
            type="text"
            id="adr"
            name="address"
            placeholder="542 W. 15th Street"
          />
          <label for="city"> City</label>
          <input type="text" id="city" name="city" placeholder="New York" />

          <label for="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="NY"
            className={styles.shortInput}
            maxLength={2}
          />
          <label for="zip">Zip</label>
          <input
            type="text"
            id="zip"
            name="zip"
            placeholder="10001"
            className={styles.shortInput}
            maxLength={5}
          />
        </form>
      </div>

      <div className={styles.ccContainer}>
        <form className={styles.ccForm}>
          <label className={styles.inputContainer} htmlFor="cname">
            Name on Card
          </label>
          <input
            type="text"
            id="cname"
            name="cardname"
            placeholder="John Doe"
            className={styles.ccInput}
          />
          <label className={styles.inputContainer} htmlFor="ccnum">
            Card number
          </label>
          <input
            type="tel"
            id="ccnum"
            name="cardnumber"
            className={styles.ccInput}
            placeholder="1111-2222-3333-4444"
            maxLength={16}
          />
          <div className={styles.expiryCvvContainer}>
            <label className={styles.inputContainer} htmlFor="cardExpiry">
              Expires on
            </label>
            <input
              type="text"
              name="cardExpiry"
              className={`${styles.ccInput} ${styles.ccShortInput}`}
              placeholder="MM/YY"
              maxLength={5}
            />
            <label className={styles.inputContainer} htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className={`${styles.ccInput} ${styles.ccShortInput}`}
              placeholder="352"
              maxLength={3}
            />
          </div>

          <div className={styles.ccButtonContainer}>
            <button type="submit" className={styles.ccButton}>
              Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreditCardForm;
