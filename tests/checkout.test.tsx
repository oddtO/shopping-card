import { describe, vi, it, expect, beforeEach } from "vitest";
import { routes } from "../src/routes";
import { createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { mockedFetch } from "./mocks";
import { products } from "./shop-products";
import type { Product } from "../src/use-product";

beforeEach(() => {
  window.sessionStorage.clear();
});
const spy = vi.spyOn(window, "fetch");

spy.mockImplementation(mockedFetch as unknown as typeof fetch);
let user: ReturnType<typeof userEvent.setup>;
it("no items placed in the cart case ", async () => {
  const renderData = renderComponent();
  user = renderData.user;

  const btns = await screen.findAllByRole("button", { name: /add to cart/i });
  const btn = btns[0];

  expect(btn).toBeInTheDocument();

  await navigateToPage(user, /cart/i);

  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
describe("Checkout (1 item)", () => {
  beforeEach(async () => {
    const renderData = renderComponent();
    user = renderData.user;
    const btns = await screen.findAllByRole("button", { name: /add to cart/i });
    const btn = btns[0];

    await user.click(btn);

    await navigateToPage(user, /cart/i);
  });
  it("should display item in a cart ", async () => {
    // expect(screen.getByText(/order summary/i)).toBeInTheDocument();
    const item = await getCheckoutItem(products[0]);
    expect(item.heading).toBeInTheDocument();
    expect(item.description).toBeInTheDocument();
    expect(item.price).toBeInTheDocument();
    expect(item.image).toHaveAttribute("src", products[0].image);
    expect(item.quantity[0]).toHaveTextContent("1");
    expect(item.quantity[1]).toHaveTextContent("1");
  });

  it("item in cart should be possible to increment/decrement in count", async () => {
    // expect(screen.getByText(/order summary/i)).toBeInTheDocument();
    const item = await getCheckoutItem(products[0]);

    expect(item.quantity[0]).toHaveTextContent("1");
    expect(item.quantity[1]).toHaveTextContent("1");

    await user.click(item.incBtn[0]);

    expect(item.quantity[0]).toHaveTextContent("2");
    expect(item.quantity[1]).toHaveTextContent("2");

    await user.click(item.decBtn[0]);

    expect(item.quantity[0]).toHaveTextContent("1");
    expect(item.quantity[1]).toHaveTextContent("1");

    await user.click(item.incBtn[1]);

    expect(item.quantity[0]).toHaveTextContent("2");
    expect(item.quantity[1]).toHaveTextContent("2");

    await user.click(item.decBtn[1]);

    expect(item.quantity[0]).toHaveTextContent("1");
    expect(item.quantity[1]).toHaveTextContent("1");
  });

  it("item count in cart can't be more or fewer than min and max", async () => {
    const MIN = 1;
    const MAX = 20;

    const item = await getCheckoutItem(products[0]);

    expect(item.quantity[0]).toHaveTextContent("1");
    expect(item.quantity[1]).toHaveTextContent("1");

    await user.click(item.decBtn[0]);

    expect(item.quantity[0]).toHaveTextContent("1");
    expect(item.quantity[1]).toHaveTextContent("1");

    //iterate 20 times
    for (let i = MIN; i < MAX; ++i) {
      await user.click(item.incBtn[0]);
    }

    await user.click(item.incBtn[0]);

    expect(item.quantity[0]).toHaveTextContent(MAX.toString());
    expect(item.quantity[1]).toHaveTextContent(MAX.toString());
  });

  it("renders correct total and subtotal for an item", async () => {
    const item = await getCheckoutItem(products[0]);
    const [subtotalLabel, totalLabel] = await getSubtotalAndTotal();

    for (let i = 1; i < 3; ++i) {
      expect(subtotalLabel).toHaveTextContent("$" + products[0].price * i);
      expect(totalLabel).toHaveTextContent("$" + products[0].price * i);
      await user.click(item.incBtn[0]);
    }
    for (let i = 3; i > 1; --i) {
      expect(subtotalLabel).toHaveTextContent("$" + products[0].price * i);
      expect(totalLabel).toHaveTextContent("$" + products[0].price * i);
      await user.click(item.decBtn[0]);
    }

    expect(subtotalLabel).toHaveTextContent("$" + products[0].price);
    expect(totalLabel).toHaveTextContent("$" + products[0].price);
  });

  it("all items removed case (delete button 1)", async () => {
    const item = await getCheckoutItem(products[0]);

    const itemCount1 = screen.getByTestId("item-count1");

    expect(itemCount1).toHaveTextContent("1");
    await user.click(item.deleteBtn[0]);
    expect(itemCount1).toHaveTextContent("0");

    testIfItemIsRemoved(item);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
  it("all items removed case (delete button 2)", async () => {
    const item = await getCheckoutItem(products[0]);

    const itemCount1 = screen.getByTestId("item-count1");

    expect(itemCount1).toHaveTextContent("1");
    await user.click(item.deleteBtn[1]);
    expect(itemCount1).toHaveTextContent("0");
    testIfItemIsRemoved(item);
  });
});

describe("checkout (multiple items)", () => {
  beforeEach(async () => {
    const renderData = renderComponent();
    user = renderData.user;
    const btns = await screen.findAllByRole("button", { name: /add to cart/i });

    for (const btn of btns) {
      await user.click(btn);
    }

    await navigateToPage(user, /cart/i);
  });

  it("check total and subtotal responding to items in cart changes", async () => {
    const itemsPromises = [];

    for (const product of products) {
      itemsPromises.push(getCheckoutItem(product));
    }

    const items = await Promise.all(itemsPromises);

    await testSubtotalAndTotal(items);

    await user.click(items[0].incBtn[0]);
    await testSubtotalAndTotal(items);

    await user.click(items[1].deleteBtn[0]);

    const [removed1] = items.splice(1, 1);
    testIfItemIsRemoved(removed1);
    await testSubtotalAndTotal(items);
  });
});

async function testSubtotalAndTotal(
  items: Awaited<ReturnType<typeof getCheckoutItem>>[],
) {
  const [subtotal, total] = await getSubtotalAndTotal();

  const totalPrice = items.reduce((total, current) => {
    return (
      total +
      +current.price.textContent!.replace(/[^\d]/i, "") *
        +current.quantity[0].textContent!
    );
  }, 0);

  expect(subtotal).toHaveTextContent("$" + totalPrice);
  expect(total).toHaveTextContent("$" + totalPrice);
}
async function navigateToPage(
  user: ReturnType<typeof userEvent.setup>,
  linkName: RegExp,
) {
  const link = screen.getAllByRole("link", { name: linkName })[0];
  await user.click(link);
}
function renderComponent() {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/shop"],
  });

  const user = userEvent.setup();
  const renderObj = render(<RouterProvider router={router} />);
  return { ...renderObj, user };
}

async function removeProduct(
  index: number,
  items: Awaited<ReturnType<typeof getCheckoutItem>>[],
  products: Product[],
) {
  await user.click(items[index].deleteBtn[0]);
  products.splice(index, 1);
}

function getSubtotalAndTotal() {
  const subtotalLabel = screen.findByLabelText(/subtotal/i);

  const totalLabel = screen.findByLabelText(/^total$/i);

  return Promise.all([subtotalLabel, totalLabel]);
}
async function getCheckoutItem(product: Product) {
  const headingText = screen.findByRole("heading", {
    name: product.title,
  });

  const description = screen.findByText(product.description);
  const price = screen.findByTestId(product.title + "-item-price");
  const image = screen.findByAltText(product.title);

  const deleteBtn = screen.findAllByTestId(product.title + " " + "delete");
  const decBtn = screen.findAllByTestId(product.title + " " + "decrement");
  const incBtn = screen.findAllByTestId(product.title + " " + "increment");
  const quantity = screen.findAllByTestId(product.title + " " + "value");

  const resolvedPromises = await Promise.all([
    headingText,
    description,
    price,
    image,
    deleteBtn,
    decBtn,
    incBtn,
    quantity,
  ]);

  return {
    heading: resolvedPromises[0],
    description: resolvedPromises[1],
    price: resolvedPromises[2],
    image: resolvedPromises[3],
    deleteBtn: resolvedPromises[4],
    decBtn: resolvedPromises[5],
    incBtn: resolvedPromises[6],
    quantity: resolvedPromises[7],
  };
}

function testIfItemIsRemoved(
  item: Awaited<ReturnType<typeof getCheckoutItem>>,
) {
  type ArrayKeys<T> = {
    [K in keyof T]: T[K] extends HTMLElement[] ? K : never;
  }[keyof T];

  let key: keyof typeof item;
  for (key in item) {
    console.log(item[key]);
    if ("length" in item[key]) {
      item[key as ArrayKeys<typeof item>].forEach((element) => {
        expect(element).not.toBeInTheDocument();
      });
    } else {
      expect(item[key]).not.toBeInTheDocument();
    }
  }
}
