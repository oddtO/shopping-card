import styles from "./styles.module.scss";

export type ChangeCountFunction = () => void;
export default function NumberInput({
  title,
  count,
  incCb,
  decCb,
  className = "",
}: {
  title: string;
  count: number;
  incCb: ChangeCountFunction;
  decCb: ChangeCountFunction;
  className?: string;
}) {
  return (
    <div className={styles.numberInput}>
      <button
        onClick={decCb}
        className={styles.decBtn}
        data-testid={title + " " + "decrement"}
        aria-label={"decrease " + title + " quantity"}
      >
        –
      </button>
      <input type="number" name="quantity" className={className} readOnly />
      {/*Prevent centered input display bugs thanks to span*/}
      <span
        className={styles.inputVal}
        data-testid={title + " " + "value"}
        aria-label="product quantity"
      >
        {count}
      </span>
      <button
        onClick={incCb}
        className={styles.incBtn}
        data-testid={title + " " + "increment"}
        aria-label={"increase " + title + " quantity"}
      >
        +
      </button>
    </div>
  );
}
