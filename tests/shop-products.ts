import type { Product } from "../src/use-product";
type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";
export const products: readonly Product[] = [
  {
    id: 1,
    title: "Product name 0",
    price: 2321,
    category: "electronics",
    description: "Product description 0",
    image: "../src/assets/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Product name 1",
    price: 2321,
    category: "electronics",
    description: "Product description 1",
    image: "../src/assets/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 3,
    title: "Product name 2",
    price: 2321,
    category: "electronics",
    description: "Product description 2",
    image: "../src/assets/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
];
