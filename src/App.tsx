import "./reset.css";
import { useState } from "react";
// import { useProducts } from "./use-product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetailed />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
