import styles from "./styles.module.scss";

export default function IconButton({
  className = "",
  imgSrc,
  onClick = () => {},
}: {
  className?: string;
  imgSrc: string;
  onClick?: () => void;
}) {
  return (
    <button className={className + " " + styles.icon} onClick={onClick}>
      <img src={imgSrc} alt="icon" />
    </button>
  );
}
