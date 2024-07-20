import styles from "./styles.module.scss";

export default function IconButton({
  className = "",
  imgSrc,
  onClick,
  ariaLabel,
}: {
  className?: string;
  imgSrc: string;

  onClick?: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className={className + " " + styles.icon}
      onClick={onClick}
    >
      <img src={imgSrc} alt="icon" />
    </button>
  );
}
