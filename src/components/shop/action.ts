export default async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const id = formData.get("product-id") as string;
  const action = formData.get("action") as string;
  if (action == "add") {
    sessionStorage.setItem(id, JSON.stringify({ count: 1 }));
  } else if (action == "remove") {
    sessionStorage.removeItem(id);
  }

  window.dispatchEvent(new Event("storage"));

  return null;
}
