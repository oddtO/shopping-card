import NumberInput from "../../number-input/component";
import styles from "./styles.module.scss";
import type { ChangeCountFunction } from "../../number-input/component";
export default function ProductCheckout({
  count,
  decCb,
  incCb,
  deleteCb,
  className = "",
  imgSrc,
  title,
  description,
  price,
}: {
  count: number;
  decCb: ChangeCountFunction;
  incCb: ChangeCountFunction;
  deleteCb: () => void;
  className?: string;
  imgSrc: string;

  title: string;
  description: string;
  price: string;
}) {
  return (
    <figure className={styles.figure + " " + className}>
      <img src={imgSrc} alt={title} />
      <figcaption>
        <div className={styles.captionInner}>
          <div className={styles.description}>
            <h3>{title}</h3>
            <p className={styles.longInfo}>{description}</p>
            <p className={styles.priceInfo} data-testid={title + "-item-price"}>
              {price}
            </p>
          </div>
          <div className={styles.controls}>
            <button
              onClick={deleteCb}
              className={styles.cancelButton}
              data-testid={title + " " + "delete"}
              type="button"
            >
              X
            </button>
            <NumberInput
              count={count}
              incCb={incCb}
              decCb={decCb}
              title={title}
              className={styles.quantityInput}
            />
          </div>
        </div>
        <div className={styles.lowScreenSizeControls}>
          <button
            className={styles.cancelButton}
            type="button"
            data-testid={title + " " + "delete"}
            onClick={deleteCb}
          >
            X
          </button>
          <NumberInput
            count={count}
            incCb={incCb}
            decCb={decCb}
            title={title}
            className={styles.quantityInput}
          />
        </div>
      </figcaption>
    </figure>
  );
}
