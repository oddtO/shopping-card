import styles from "./styles.module.scss";

export default function CustomButton({
  children,
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button className={className + " " + styles.customButton}>
      {children}
    </button>
  );
}
