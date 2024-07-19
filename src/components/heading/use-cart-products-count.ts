import { useState, useEffect } from "react";
export default function useCartProductsCount() {
  const [cartProductsCount, setCartProductsCount] = useState(
    sessionStorage.length,
  );

  useEffect(() => {
    window.addEventListener("storage", updateCartProductsCount);

    return () => window.removeEventListener("storage", updateCartProductsCount);
  }, []);

  return cartProductsCount;
  function updateCartProductsCount() {
    setCartProductsCount(sessionStorage.length);
  }
}
