import styles from "./styles.module.scss";
import ShopItem from "../shop-item/component";
import DummyImg from "../../assets/81fPKd-2AYL._AC_SL1500_.jpg";
export default function Shop() {
  return (
    <div className={styles.shopWrapper}>
      <div className={styles.categoriesWrapper}>
        <div className={styles.categories}>
          <h2>Categories</h2>
          <ul>
            <li>
              <a href="">All</a>
            </li>
            <li>
              <a>Electronics</a>
            </li>
            <li>
              <a>Jewelery</a>
            </li>
            <li>
              <a>Men's clothing</a>
            </li>
            <li>
              <a>Women's clothing</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.itemsWrapper}>
        <form action="">
          <label htmlFor="sort-option">Sort by</label>
          <select name="sort-option" id="sort-option">
            <option value="cheapest">Lowest Price</option>
            <option value="expensive">Highest Price</option>
            <option value="rating">Most reviews</option>
            <option value="best-rating">Best Rated</option>
          </select>
        </form>
        <h3>100 items</h3>
        <ul>
          <li>
            <ShopItem
              imgSrc={DummyImg}
              title={"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
              rating={4.9}
              ratingCount={323}
              price={"$100"}
            />
          </li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
      </div>
    </div>
  );
}
