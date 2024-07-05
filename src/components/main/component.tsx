import styles, { introWrapper } from "./styles.module.scss";
import Stat from "../stat/component";
export default function Main() {
  return (
    <div className={styles.introWrapper}>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <h2>
            Find Products That
            <br /> Match Your Style
          </h2>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <a href="#">Shop Now</a>
          <ul>
            <li>
              <Stat name="International Brands" quantity="200+"></Stat>
            </li>
            <li>
              <Stat name="High-Quality Products" quantity="2000+"></Stat>
            </li>
            <li>
              <Stat name="Happy Customers" quantity="50000+"></Stat>
            </li>
          </ul>
        </div>
        <div className={styles.introImg}></div>
      </div>
    </div>
  );
}
