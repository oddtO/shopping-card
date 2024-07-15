export default function loader() {
  const categoriesPromise = fetch(
    "https://fakestoreapi.com/products/categories",
  ).then((res) => res.json());
  const productsPromise = fetch("https://fakestoreapi.com/products").then(
    (res) => res.json(),
  );

  return Promise.all([categoriesPromise, productsPromise]);
}
