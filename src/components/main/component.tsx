import styles from "./styles.module.scss";
import Stat from "../stat/component";
import AttributedImage from "../attributed-image/component";
import StylishImg from "../../assets/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated.png";
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
              <Stat
                className={styles.companyStat}
                name="International Brands"
                quantity="200+"
              ></Stat>
            </li>
            <li>
              <Stat
                className={styles.companyStat}
                name="High-Quality Products"
                quantity="2000+"
              ></Stat>
            </li>
            <li>
              <Stat
                className={styles.companyStat}
                name="Happy Customers"
                quantity="50000+"
              ></Stat>
            </li>
          </ul>
        </div>
        <div className={styles.introImg}>
          <AttributedImage
            className={styles.styleImg}
            src={StylishImg}
            alt="stylish img"
            attribution={
              <a href="https://www.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_6849843.htm#fromView=search&page=1&position=0&uuid=3c2ea361-3892-41e5-96d3-c5c6124dc49b">
                Image by halayalex on Freepik
              </a>
            }
          />
        </div>
      </div>
    </div>
  );
}
