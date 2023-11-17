import styles from "./Calculator.module.css";

export default function Calculator() {
  return (
    <div className={styles.calcMain}>
      <div className={styles.calcContainer}>
        <div className={styles.calcCard}>
          <textarea type="text" id="inputtext" placeholder="0"></textarea>
          <button>C</button>
          <button>DEL</button>
          <button></button>
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
          <button>00</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}
