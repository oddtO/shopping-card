import NumberInput from "../../number-input/component";
import styles from "./styles.module.scss";
import type { ChangeCountFunction } from "../../number-input/component";
import IconButton from "../../icon-button/component";
import RemoveImg from "../../../assets/reshot-icon-trash-can-4STZDYFJLV.svg";
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
            <IconButton
              className={styles.cancelButton}
              imgSrc={RemoveImg}
              onClick={deleteCb}
              ariaLabel={`Remove ${title}`}
            />
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
          <IconButton
            className={styles.cancelButton}
            imgSrc={RemoveImg}
            onClick={deleteCb}
            ariaLabel={`Remove ${title}`}
          />
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
