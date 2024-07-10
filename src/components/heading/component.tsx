import styles from "./styles.module.scss";
import popupStyles from "./popup.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Heading() {
  const [popupOpen, setPopupOpen] = useState(false);

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
      <form action="">
        <input type="search" name="product" id="product" />
      </form>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li className={styles.alwaysVisible}>
            <Link to="checkout">Cart</Link>
          </li>
          <li className={styles.onNarrowVisible}>
            <button type="button" onClick={openPopup}>
              Menu
            </button>
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
            <button type="button" onClick={closePopup}>
              <img src="" alt="X" />
            </button>
          </div>
          <form action="">
            <input type="search" name="product" id="product" />
          </form>
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
