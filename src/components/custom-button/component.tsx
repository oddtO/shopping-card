import styles from "./styles.module.scss";

export default function CustomButton({
  children,
  className = "",
  name = undefined,
  value = undefined,
}: {
  className?: string;
  children: React.ReactNode;
  name?: string;
  value?: string;
}) {
  return (
    <button
      name={name}
      value={value}
      className={className + " " + styles.customButton}
    >
      {children}
    </button>
  );
}
