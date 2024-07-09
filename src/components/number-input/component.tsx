import styles from "./styles.module.scss";

export default function NumberInput({ className = "" }) {
  return (
    <div className={styles.numberInput}>
      <button className={styles.decBtn}>–</button>
      <input type="number" name="quantity" className={className} readOnly />
      {/*Prevent centered input display bugs with span*/}
      <span className={styles.inputVal}>2</span>
      <button className={styles.incBtn}>+</button>
    </div>
  );
}
