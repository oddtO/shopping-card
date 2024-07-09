import styles from "./styles.module.scss";
import listStyles, { list } from "./list.module.scss";
import summaryStyles from "./order-summary-wrapper.module.scss";
import ProductCheckout from "../checkout/productCheckout/component";
import DummyImg from "../../assets/81fPKd-2AYL._AC_SL1500_.jpg";
import CustomButton from "../custom-button/component";
import { orderSummaryWrapper } from "./order-summary-wrapper.module.scss";
import TitleAndValue from "./title-and-value/component";

export default function Checkout() {
  return (
    <div className={styles.checkoutPage} data-is-many-items="true">
      <h2>YOUR CART</h2>{" "}
      <div className={styles.content}>
        <ul className={listStyles.list}>
          <li>
            <ProductCheckout
              className={listStyles.listFigure}
              imgSrc={DummyImg}
              title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
              price="$109.95"
            />
            <ProductCheckout
              className={listStyles.listFigure}
              imgSrc={DummyImg}
              title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
              price="$109.95"
            />
            <ProductCheckout
              className={listStyles.listFigure}
              imgSrc={DummyImg}
              title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
              price="$109.95"
            />
          </li>
        </ul>

        <div className={summaryStyles.orderSummaryWrapper}>
          <h3>Order Summary</h3>
          <ul>
            <li>
              <TitleAndValue title="Subtotal" value="$4459.90" />
            </li>
            <li>
              <TitleAndValue title="Delivery fee" value="$0" />
            </li>
            <li>
              <TitleAndValue title="Total" value="$4459.90" />
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
