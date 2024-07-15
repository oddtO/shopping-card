import styles, { addToCartBtn } from "./styles.module.scss";
import StarRating from "./star-rating";
import RatingInfo from "../rating-info/component";
import CustomButton from "../custom-button/component";
import CustomImage from "../custom-image/component";
import LoadingSpinner from "../../assets/loading-7528_256.gif";
import { Form, useFetcher } from "react-router-dom";
export default function ShopItem({
  id,
  imgSrc,
  title,
  rating,
  ratingCount,
  price,
}: {
  id: number;
  imgSrc: string;
  title: string;
  rating: number;
  ratingCount: number;
  price: string;
}) {
  const fetcher = useFetcher();

  const isInTheCart = sessionStorage.getItem(String(id)) != null;

  return (
    <div className={styles.item}>
      <figure>
        {/*         <img src={imgSrc} alt={title} /> */}
        <CustomImage src={imgSrc} alt={title} loaderImg={LoadingSpinner} />
        <figcaption>
          <h3>{title}</h3>
          <RatingInfo rating={rating} ratingCount={ratingCount} />
          <p className={styles.price}>{price}</p>

          <fetcher.Form
            method="post"
            className={
              isInTheCart
                ? styles.removeFromCartBtnWrapper
                : styles.addToCartBtnWrapper
            }
          >
            <input
              type="hidden"
              name="action"
              value={isInTheCart ? "remove" : "add"}
            />
            <CustomButton name="product-id" value={String(id)}>
              {isInTheCart ? " Remove from cart" : "Add to cart"}
            </CustomButton>
          </fetcher.Form>
        </figcaption>
      </figure>
    </div>
  );
}
