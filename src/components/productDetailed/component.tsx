import styles from "./styles.module.scss";
import RatingInfo from "../rating-info/component";
import CustomButton from "../custom-button/component";
import type { Product } from "../../use-product";
import { useLoaderData, useNavigate } from "react-router-dom";
import CustomImage from "../custom-image/component";
import LoaderImg from "../../assets/loading-7528_256.gif";
import { useFetcher } from "react-router-dom";
import ArrowLeftImg from "../../assets/reshot-icon-arrow-left-UZDAC2LESG.svg";
import IconButton from "../icon-button/component";
export default function ProductDetailed() {
  const item = useLoaderData() as Product;

  const fetcher = useFetcher();
  const navigate = useNavigate();
  const isInTheCart = sessionStorage.getItem(String(item.id)) != null;
  return (
    <div className={styles.productDetailedWrapper}>
      <figure>
        <CustomImage
          src={item.image}
          alt={item.title}
          loaderImg={LoaderImg}
        ></CustomImage>
        <figcaption>
          <IconButton
            ariaLabel="Go back"
            className={styles.goBackLink}
            onClick={() => navigate(-1)}
            imgSrc={ArrowLeftImg}
          />
          <h2>{item.title}</h2>{" "}
          <RatingInfo
            rating={item.rating.rate}
            ratingCount={item.rating.count}
          />
          <p className={styles.price}>{"$" + item.price}</p>
          <p className={styles.description}>{item.description}</p>
          <fetcher.Form
            action="/shop"
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
            <CustomButton name="product-id" value={String(item.id)}>
              {isInTheCart ? " Remove from cart" : "Add to cart"}
            </CustomButton>
          </fetcher.Form>
        </figcaption>
      </figure>
    </div>
  );
}
