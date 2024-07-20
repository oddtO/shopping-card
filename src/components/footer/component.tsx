import styles from "./styles.module.scss";
import IconButton from "../icon-button/component";
import TwitterIcon from "../../assets/reshot-icon-twitter-4EAXDHGYM5.svg";
import FacebookIcon from "../../assets/reshot-icon-facebook-EAQUC4LBMV.svg";
import InstagramIcon from "../../assets/reshot-icon-instagram-M2ZK3USTWR.svg";
import GithubIcon from "../../assets/reshot-icon-github-NY46M9DGFU.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.description}>
        <h3>Mega Shop</h3>{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, sit
          laborum quam excepturi natus expedita soluta aliquam blanditiis nemo
          voluptate enim, adipisci recusandae perferendis similique commodi
          mollitia aliquid harum reiciendis. Cupiditate expedita, aliquam,
          distinctio dolor rem voluptate eaque pariatur amet labore sint
          adipisci! Alias, repellendus rem consectetur animi dicta accusantium
          excepturi voluptates? Fuga nisi necessitatibus animi eveniet minus
          quis! Aspernatur.
        </p>{" "}
        <ul>
          <li>
            <IconButton
              ariaLabel="Go to twitter"
              className={styles.icon}
              imgSrc={TwitterIcon}
            />
          </li>
          <li>
            <IconButton
              ariaLabel="Go to facebook"
              className={styles.icon}
              imgSrc={FacebookIcon}
            />
          </li>
          <li>
            <IconButton
              ariaLabel="Go to instagram"
              className={styles.icon}
              imgSrc={InstagramIcon}
            />
          </li>
          <li>
            <IconButton
              ariaLabel="Go to github repository"
              className={styles.icon}
              imgSrc={GithubIcon}
            />
          </li>
        </ul>
      </div>
      <div className={styles.allLinks}>
        <div className={styles.linkGroup}>
          <h4>Shop</h4>
          <ul>
            <li>
              <Link to="/shop?category=electronics">electronics</Link>
            </li>
            <li>
              <Link to="/shop?category=jewelery">jewelery</Link>
            </li>
            <li>
              <Link to="/shop?category=men's clothing">
                men&apos;s clothing
              </Link>
            </li>
            <li>
              <Link to="/shop?category=women's clothing">
                women&apos;s clothing
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h4>
            Useful
            <br /> Links
          </h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="/checkout">Cart</Link>
            </li>
            <li>
              <a href="https://github.com/oddtO/shopping-cart">Repository</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
