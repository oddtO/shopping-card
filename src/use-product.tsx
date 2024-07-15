import { useState, useEffect } from "react";

export type Product = {
  description: string;
  rating: { count: number; rate: number };
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchProducts() {
      let res: Response;
      try {
        res = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
          signal: abortController.signal,
        });
      } catch (error: unknown) {
        if (!(error instanceof Error)) {
          throw error;
        }

        setError(error.message);
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError("Could not fetch products");
        setLoading(false);
        return;
      }

      const data = await res.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
      setError(null);
    }
    fetchProducts();

    return () => abortController.abort();
  }, []);

  return { products, loading, error, success: !loading && !error };
}
