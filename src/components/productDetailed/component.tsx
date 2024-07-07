import styles from "./styles.module.scss";
import DummyImg from "../../assets/81fPKd-2AYL._AC_SL1500_.jpg";
import RatingInfo from "../rating-info/component";
import CustomButton from "../custom-button/component";

export default function ProductDetailed({
  title = "Mens Casual Premium Slim Fit T-Shirts",
  imgSrc = DummyImg,
  ratingEstimate = 2.6,
  ratingsCount = 300,
  price = "$2132",
  description = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
}: {
  title: string;
  imgSrc: string;
  ratingEstimate: number;
  ratingsCount: number;
  price: string;
  description: string;
}) {
  return (
    <div className={styles.productDetailedWrapper}>
      <figure>
        {" "}
        <img src={imgSrc} alt="shop item" />{" "}
        <figcaption>
          <h2>{title}</h2>
          <RatingInfo rating={ratingEstimate} ratingCount={ratingsCount} />
          <p className={styles.price}>{price}</p>
          <p className={styles.description}>{description}</p>
          <CustomButton className={styles.addToCartBtn}>
            Add to cart
          </CustomButton>
        </figcaption>
      </figure>
    </div>
  );
}
