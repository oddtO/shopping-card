import styles from "./styles.module.scss";
export default function TitleAndValue({
  className = "",
  title,
  value,
}: {
  className?: string;
  title: string;
  value: string;
}) {
  return (
    <div className={styles.titleAndValueWrapper + " " + className}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
