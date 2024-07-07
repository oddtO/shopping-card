import styles, { addToCartBtn } from "./styles.module.scss";
import StarRating from "./star-rating";
import RatingInfo from "../rating-info/component";
import CustomButton from "../custom-button/component";
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
          <RatingInfo rating={rating} ratingCount={ratingCount} />
          <p className={styles.price}>{price}</p>
          <CustomButton className={addToCartBtn}>Add to cart</CustomButton>
        </figcaption>
      </figure>
    </div>
  );
}
