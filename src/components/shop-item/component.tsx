import styles from "./styles.module.scss";
import StarRating from "./star-rating";
export default function ShopItem({
  imgSrc,
  title,
  rating,
  ratingCount,
  price,
}: {
  imgSrc: string;
  title: string;
  rating: number;
  ratingCount: number;
  price: string;
}) {
  return (
    <div className={styles.item}>
      <figure>
        <img src={imgSrc} alt={title} />
        <figcaption>
          <h3>{title}</h3>
          <p className={styles.ratingInfo}>
            <StarRating rating={rating} className={styles.stars} />
            <p className={styles.ratingInfoEstimate}>{rating}</p>
            <p className={styles.ratingInfoCount}> ({ratingCount})</p>
          </p>
          <p className={styles.price}>{price}</p>
          <button type="button">Add to cart</button>
        </figcaption>
      </figure>
    </div>
  );
}
