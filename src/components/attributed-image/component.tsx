import styles from "./styles.module.scss";
export default function AttributedImage({
  className,
  src,
  alt,
  attribution,
}: {
  className?: string;
  src: string;
  alt: string;
  attribution: React.ReactNode;
}) {
  return (
    <div className={styles.attributedImageWrapper}>
      <img
        className={className ? className : styles.imgDefaultSizing}
        src={src}
        alt={alt}
      />
      <span>{attribution}</span>
    </div>
  );
}
