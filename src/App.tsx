import "./reset.css";
import { useState } from "react";
// import { useProducts } from "./use-product";
import Heading from "./components/heading/component";
import Main from "./components/main/component";
import Footer from "./components/footer/component";
import Shop from "./components/shop/component";
import ProductDetailed from "./components/productDetailed/component";
import Checkout from "./components/checkout/component";
function App() {
  // const { success, products } = useProducts();

  return (
    <>
      <Heading />
      <Checkout />
      <Footer />
    </>
  );
}

export default App;
