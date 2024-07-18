import { createSearchParams } from "react-router-dom";
export default function loader({ request }: { request: Request }) {
  const categoriesPromise = fetch(
    "https://fakestoreapi.com/products/categories",
  ).then((res) => res.json());

  const params = new URL(request.url).searchParams;

  let baseUrl;
  switch (params.get("category")) {
    case "all":
    case null:
      baseUrl = new URL("https://fakestoreapi.com/products");
      break;
    default:
      baseUrl = new URL(
        `https://fakestoreapi.com/products/category/${params.get("category")}`,
      );
  }

  const sortParam = params.get("sort") ?? "asc";
  baseUrl.searchParams.set("sort", sortParam);

  const productsPromise = fetch(baseUrl).then((res) => res.json());

  const categoryParam = params.get("category") ?? "all";
  return Promise.all([
    categoriesPromise,
    productsPromise,
    Promise.resolve(sortParam),
    Promise.resolve(categoryParam),
  ]);
}
