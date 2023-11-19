import styles from "./Calculator.module.css";

export default function Calculator() {
  return (
    <div className={styles.calcMain}>
      <div className={styles.calcContainer}>
        <div className={styles.calcTotal}>
          <input type="text" id="inputtext" readOnly value="3612" />
        </div>

        <div className={styles.calcDigits}>
          <button>C</button>
          <button>DEL</button>
          <button>%</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>/</button>
          <button>0</button>
          <button>.</button>
          <button>+/-</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}
