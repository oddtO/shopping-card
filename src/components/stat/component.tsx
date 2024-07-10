import styles from "./styles.module.scss";

export default function Stat({
  className = "",
  name,
  quantity,
}: {
  className?: string;
  name: string;
  quantity: string;
}) {
  return (
    <div className={styles.stat + " " + className}>
      <p>{quantity}</p>
      <p>{name}</p>
    </div>
  );
}
