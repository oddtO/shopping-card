import styles from "./styles.module.scss";

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
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div className={styles.allLinks}>
        <div className={styles.linkGroup}>
          <h4>Shop</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h4>
            Useful
            <br /> Links
          </h4>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
