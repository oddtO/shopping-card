import styles from "./styles.module.scss";
import StarRating from "../shop-item/star-rating";
export default function RatingInfo({
  rating,
  ratingCount,
}: {
  rating: number;
  ratingCount: number;
}) {
  return (
    <p className={styles.ratingInfo}>
      <StarRating rating={rating} className={styles.stars} />
      <p className={styles.ratingInfoEstimate}>{rating}</p>
      <p className={styles.ratingInfoCount}> ({ratingCount})</p>
    </p>
  );
}
