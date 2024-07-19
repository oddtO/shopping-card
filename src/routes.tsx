import {
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLocation,
  ScrollRestoration,
} from "react-router-dom";
import Heading from "./components/heading/component";
import Footer from "./components/footer/component";
import Main from "./components/main/component";
import Shop from "./components/shop/component";
import ProductDetailed from "./components/productDetailed/component";
import Checkout from "./components/checkout/component";
import shopLoader from "./components/shop/loader.ts";
import shopAction from "./components/shop/action.ts";
import checkoutLoader from "./components/checkout/loader.ts";
import productDetailedLoader from "./components/productDetailed/loader.ts";
import { useEffect } from "react";

function BasicLayout() {
  return (
    <>
      <Heading />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export const routes = createRoutesFromElements(
  <Route path="/" element={<BasicLayout />}>
    <Route index element={<Main />} />
    <Route
      path="shop"
      element={<Shop />}
      loader={shopLoader}
      action={shopAction}
    />
    <Route
      path="shop/:id"
      element={<ProductDetailed />}
      loader={productDetailedLoader}
    />
    <Route path="checkout" element={<Checkout />} loader={checkoutLoader} />
  </Route>,
);
