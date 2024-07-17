import styles from "./styles.module.scss";
import listStyles from "./list.module.scss";
import summaryStyles from "./order-summary-wrapper.module.scss";
import ProductCheckout from "../checkout/productCheckout/component";
import CustomButton from "../custom-button/component";
import TitleAndValue from "./title-and-value/component";
import { useState } from "react";
import type { Product } from "../../use-product";
import { useLoaderData } from "react-router-dom";

interface CountType {
  count: number;
}
type SessionStorageStruct = Record<number, CountType>;

function sessionStorageToObject() {
  const obj: SessionStorageStruct = {};
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (!key) continue;

    const valueString = sessionStorage.getItem(key);

    console.log(JSON.stringify(sessionStorage));
    if (!valueString) continue;
    console.log(valueString);
    obj[+key] = JSON.parse(valueString) as CountType;
  }
  return obj;
}

const CHECKOUT_MIN_ITEMS = 1;
const CHECKOUT_MAX_ITEMS = 20;
export default function Checkout() {
  const productsInit = useLoaderData() as readonly Product[];
  const [products, setProducts] = useState(productsInit);
  const [productCounts, setProductCounts] = useState<SessionStorageStruct>(() =>
    sessionStorageToObject(),
  );

  if (products.length == 0)
    return (
      <div className={styles.checkoutPage + " " + styles.emptyCart}>
        <p>Your cart is empty</p>
      </div>
    );

  const totalPrice = products.reduce((total: number, current) => {
    return total + current.price * productCounts[current.id].count;
  }, 0);

  const changeCountCb = (id: number, count: number, diff: 1 | -1) => {
    const newCount = count + diff;

    if (newCount < CHECKOUT_MIN_ITEMS || newCount > CHECKOUT_MAX_ITEMS) return;

    sessionStorage.setItem(String(id), JSON.stringify({ count: newCount }));

    setProductCounts(sessionStorageToObject());
  };

  const deleteCb = (id: number) => {
    sessionStorage.removeItem(String(id));
    setProductCounts(sessionStorageToObject());
    setProducts(
      products.filter((product) => {
        return product.id != id;
      }),
    );

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div
      className={styles.checkoutPage}
      data-should-go-beyond-viewport-height={
        products.length > 1 ? "true" : "false"
      }
    >
      <h2>YOUR CART</h2>
      <div className={styles.content}>
        <ul className={listStyles.list}>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCheckout
                deleteCb={() => deleteCb(product.id)}
                key={product.id}
                count={productCounts[product.id].count}
                incCb={() =>
                  changeCountCb(product.id, productCounts[product.id].count, 1)
                }
                decCb={() =>
                  changeCountCb(product.id, productCounts[product.id].count, -1)
                }
                className={listStyles.listFigure}
                imgSrc={product.image}
                title={product.title}
                description={product.description}
                price={"$" + String(product.price)}
              />
            </li>
          ))}
        </ul>

        <div className={summaryStyles.orderSummaryWrapper}>
          <h3>Order Summary</h3>
          <ul>
            <li>
              <TitleAndValue
                title="Subtotal"
                value={"$" + totalPrice.toFixed(2)}
              />
            </li>
            <li>
              <TitleAndValue title="Delivery fee" value="$0" />
            </li>
            <li>
              <TitleAndValue
                title="Total"
                value={"$" + totalPrice.toFixed(2)}
              />
            </li>
          </ul>
          <CustomButton className={summaryStyles.payBtn}>
            Go to Checkout
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
