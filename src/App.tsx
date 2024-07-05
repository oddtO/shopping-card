import "./reset.css";
import { useState } from "react";
// import { useProducts } from "./use-product";
import Heading from "./components/heading/component";
import Main from "./components/main/component";
import Footer from "./components/footer/component";
function App() {
  // const { success, products } = useProducts();

  return (
    <>
      <Heading />
      <Main />
      <Footer />
    </>
  );
}

export default App;
