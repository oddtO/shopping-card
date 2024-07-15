import styles from "./styles.module.scss";
import ShopItem from "../shop-item/component";
import DummyImg from "../../assets/81fPKd-2AYL._AC_SL1500_.jpg";
import { Product } from "../../use-product";
import { useLoaderData } from "react-router-dom";
export default function Shop() {
  const [categories, items] = useLoaderData() as readonly [string[], Product[]];

  return (
    <div className={styles.shopWrapper}>
      <div className={styles.categoriesWrapper}>
        <div className={styles.categories}>
          <h2>Categories</h2>
          <ul>
            <li>
              <a href="">All</a>
            </li>
            {categories.map((category) => (
              <li>
                <a key={category}>{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.itemsWrapper}>
        <form action="">
          <label htmlFor="sort-option">Sort by</label>
          <select name="sort-option" id="sort-option">
            <option value="asc" defaultChecked>
              Ascending
            </option>
            <option value="desc">Descending</option>
          </select>
        </form>
        <h3>100 items</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <ShopItem
                id={item.id}
                imgSrc={item.image}
                title={item.title}
                rating={item.rating.rate}
                ratingCount={item.rating.count}
                price={`$${item.price}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
