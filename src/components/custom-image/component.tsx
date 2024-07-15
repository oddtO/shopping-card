//package without types
import { useImage } from "react-img-placeholder";

export default function CustomImage({
  src,
  alt,
  loaderImg,
}: {
  src: string;
  alt: string;
  loaderImg: string;
}) {
  const { isLoaded } = useImage({
    src: src,
  });

  if (!isLoaded) return <img src={loaderImg} alt={alt} />;

  return <img src={src} alt={alt} />;
}
