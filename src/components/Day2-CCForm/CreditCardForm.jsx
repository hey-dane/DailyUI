import styles from "./CreditCardForm.module.css";

function CreditCardForm() {
  return (
    <div className={styles.ccContainer}>
      <form className={styles.ccForm}>
        <label htmlFor="cname">Name on Card</label>
        <input
          type="text"
          id="cname"
          name="cardname"
          placeholder="John Doe"
          className={styles.ccInput}
        />
        <label htmlFor="ccnum">Card number</label>
        <input
          type="tel"
          id="ccnum"
          name="cardnumber"
          className={styles.ccInput}
          placeholder="1111-2222-3333-4444"
        />
        <label htmlFor="cardExpiry">Expiration Date</label>
        <input
          type="tel"
          name="cardExpiry"
          className={(styles.ccInput, styles.ccShortInput)}
          placeholder="MM / YY"
          maxLength={5}
        />
        <label htmlFor="cvv">CVV</label>
        <input
          type="tel"
          id="cvv"
          name="cvv"
          className={(styles.ccInput, styles.ccShortInput)}
          placeholder="352"
          maxLength={3}
        />
        <div className={styles.ccButtonContainer}>
          <button type="submit" className={styles.ccButton}>
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreditCardForm;
