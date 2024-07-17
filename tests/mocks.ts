import { products } from "./shop-products";
import { vi } from "vitest";
export const mockedFetch = vi.fn((url: string) => {
  const base = "https://fakestoreapi.com/";
  switch (url) {
    case base + "products":
      return Promise.resolve(createFetchResponse(products));
    case base + "products/1":
      return Promise.resolve(createFetchResponse(products[0]));
    case base + "products/2":
      return Promise.resolve(createFetchResponse(products[1]));
    case base + "products/3":
      return Promise.resolve(createFetchResponse(products[2]));
    case base + "products/categories":
      return Promise.resolve(
        createFetchResponse([
          "electronics",
          "jewelery",
          "men's clothing",
          "women's clothing",
        ]),
      );
    default:
      return Promise.resolve(createFetchResponse([]));
  }
});

function createFetchResponse(data: unknown) {
  return { json: () => Promise.resolve(data) };
}
