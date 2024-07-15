import "./reset.css";
import { useState } from "react";
// import { useProducts } from "./use-product";
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(routes);

function App() {
  // const { success, products } = useProducts();

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
