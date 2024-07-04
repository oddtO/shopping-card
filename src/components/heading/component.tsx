import styles from "./styles.module.scss";
import popupStyles from "./popup.module.scss";
import { useState } from "react";

export default function Heading() {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className={styles.heading}>
      <h1>Mega Shop</h1>
      <form action="">
        <input type="search" name="product" id="product" />
      </form>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className={styles.alwaysVisible}>
            <a href="#contact">Contact</a>
          </li>
          <li className={styles.onNarrowVisible}>
            <button type="button" onClick={() => setPopupOpen(true)}>
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
            <button type="button" onClick={() => setPopupOpen(false)}>
              <img src="" alt="X" />
            </button>
          </div>
          <form action="">
            <input type="search" name="product" id="product" />
          </form>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
