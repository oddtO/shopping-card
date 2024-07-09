import NumberInput from "../../number-input/component";
import styles from "./styles.module.scss";
export default function ProductCheckout({
  className = "",
  imgSrc,
  title,
  description,
  price,
}: {
  className?: string;
  imgSrc: string;

  title: string;
  description: string;
  price: string;
}) {
  return (
    <figure className={styles.figure + " " + className}>
      <img src={imgSrc} alt="shop-item" />
      <figcaption>
        <div className={styles.captionInner}>
          <div className={styles.description}>
            <h3>{title}</h3>
            <p className={styles.longInfo}>{description}</p>
            <p className={styles.priceInfo}>{price}</p>
          </div>
          <div className={styles.controls}>
            <button className={styles.cancelButton} type="button">
              X
            </button>
            <NumberInput className={styles.quantityInput} />
          </div>
        </div>
        <div className={styles.lowScreenSizeControls}>
          <button className={styles.cancelButton} type="button">
            X
          </button>
          <NumberInput className={styles.quantityInput} />
        </div>
      </figcaption>
    </figure>
  );
}
