import styles from "./styles.module.scss";
import popupStyles from "./popup.module.scss";
import { useEffect, useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import useCartProductsCount from "./use-cart-products-count";
import IconButton from "../icon-button/component";
import CartImg from "../../assets/reshot-icon-empty-cart-FH5UR2WGKN.svg";
import MenuImg from "../../assets/reshot-icon-menu-EY6DUGZRCA.svg";
import CloseImg from "../../assets/reshot-icon-close-circle-YE2TDJM6PL.svg";
export default function Heading() {
  const [popupOpen, setPopupOpen] = useState(false);

  // const cartProductsCount = useRouteLoaderData("root") as number;
  const cartProductsCount = useCartProductsCount();
  useEffect(() => {
    document.body.style.overflow = popupOpen ? "hidden" : "auto";
  }, [popupOpen]);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };
  return (
    <div className={styles.heading}>
      <h1>
        <Link to="/">Mega Shop</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>

          <li className={styles.alwaysVisible}>
            <Link to="checkout">
              <IconButton imgSrc={CartImg} />
            </Link>
            <output data-testid="item-count1">{cartProductsCount}</output>
          </li>
          <li className={styles.onNarrowVisible}>
            <IconButton imgSrc={MenuImg} onClick={openPopup} />
          </li>
        </ul>
      </nav>
      <div
        className={
          popupStyles.popupContentWrapper +
          " " +
          (popupOpen ? popupStyles.active : "")
        }
      >
        <div className={popupStyles.popupContent}>
          <div className={popupStyles.cancelButton}>
            <IconButton imgSrc={CloseImg} onClick={closePopup} />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={closePopup}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="shop" onClick={closePopup}>
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
