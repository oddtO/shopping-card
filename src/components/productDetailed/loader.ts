import type { Params } from "react-router-dom";
export default function loader({ params }: { params: Params<"id"> }) {
  const itemPromise = fetch(
    `https://fakestoreapi.com/products/${params.id}`,
  ).then((res) => res.json());

  return itemPromise;
}
