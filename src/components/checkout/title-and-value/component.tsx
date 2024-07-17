import styles from "./styles.module.scss";
import { useId } from "react";
export default function TitleAndValue({
  className = "",
  title,
  value,
}: {
  className?: string;
  title: string;
  value: string;
}) {
  const id = useId();
  return (
    <div className={styles.titleAndValueWrapper + " " + className}>
      <label htmlFor={id} className={styles.title}>
        {title}
      </label>
      <output id={id} className={styles.value}>
        {value}
      </output>
    </div>
  );
}
