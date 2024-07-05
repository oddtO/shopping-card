import styles from "./styles.module.scss";

export default function Stat({
  name,
  quantity,
}: {
  name: string;
  quantity: string;
}) {
  return (
    <div className={styles.stat}>
      <p>{quantity}</p>
      <p>{name}</p>
    </div>
  );
}
