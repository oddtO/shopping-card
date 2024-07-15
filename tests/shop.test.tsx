import { afterEach, describe, expect, it, vi, Vitest } from "vitest";
import {
  cleanup,
  getAllByRole,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../src/routes.tsx";
import { Product } from "../src/use-product.tsx";
import userEvent from "@testing-library/user-event";
import { products } from "./shop-products.ts";

describe("Shop", () => {
  const mockedFetch = vi.fn((url: string) => {
    switch (url) {
      case "https://fakestoreapi.com/products":
        return Promise.resolve(createFetchResponse(products));
      case "https://fakestoreapi.com/products/categories":
        return Promise.resolve(
          createFetchResponse([
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
          ]),
        );
      default:
        return Promise.resolve(createFetchResponse([]));
    }
  });
  const fetchSpy = vi.spyOn(window, "fetch");

  fetchSpy.mockImplementation(mockedFetch as unknown as typeof fetch);
  function createFetchResponse(data: unknown) {
    return { json: () => Promise.resolve(data) };
  }
  function renderComponent() {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
      initialIndex: 0,
    });

    const renderObj = render(<RouterProvider router={router} />);

    return { user, ...renderObj };
  }

  it("should render all items", async () => {
    renderComponent();
    await waitFor(() => {
      expect(
        screen.getAllByRole("button", { name: /add to cart/i }).length,
      ).toBe(products.length);
    });
  });

  it("should display remove from cart when added to cart", async () => {
    const { user } = renderComponent();
    const btns = await screen.findAllByRole("button", { name: /add to cart/i });
    const btn = btns[0];

    await user.click(btn);
    expect(btn).toHaveTextContent("Remove from cart");
  });

  it("item should remain in cart after adding and switching back and forth in navbar", async () => {
    const { user } = renderComponent();
    let btns = await screen.findAllByRole("button", { name: /add to cart/i });
    let btn = btns[0];

    await user.click(btn);
    expect(btn).toHaveTextContent(/remove from cart/i);

    await navigateToPage(/home/i);

    await navigateToPage(/shop now/i);
    // await navigateToPage(/shop/i);

    btns = await screen.findAllByRole("button", { name: /remove from cart/i });

    btn = btns[0];

    expect(btn).toHaveTextContent(/remove from cart/i);

    async function navigateToPage(linkName: RegExp) {
      const link = screen.getAllByRole("link", { name: linkName })[0];

      await user.click(link);
    }
  });

  it("shop button should come with an indicator of how many items are in the cart", async () => {
    const { user } = renderComponent();
    window.sessionStorage.clear();
    const indicator1 = await screen.findByTestId("item-count1");
    const indicator2 = await screen.findByTestId("item-count2");

    expect(indicator1).toHaveTextContent("0");
    expect(indicator2).toHaveTextContent("0");

    const btns = await screen.findAllByRole("button", { name: /add to cart/i });
    const btn = btns[0];

    await user.click(btn);
    expect(indicator1).toHaveTextContent("1");
    expect(indicator2).toHaveTextContent("1");

    const btn2 = btns[1];

    await user.click(btn2);
    expect(indicator1).toHaveTextContent("2");
    expect(indicator2).toHaveTextContent("2");
    const btnsRemove = await screen.findAllByRole("button", {
      name: /remove from cart/i,
    });

    const removeBtn = btnsRemove[0];

    await user.click(removeBtn);
    expect(indicator1).toHaveTextContent("1");
    expect(indicator2).toHaveTextContent("1");
  });
});
