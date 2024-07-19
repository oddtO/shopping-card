export default function loader() {
  const promises = [];

  for (const key of Object.keys(sessionStorage)) {
    if (!Number.isFinite(Number(key))) continue;
    promises.push(
      fetch(`https://fakestoreapi.com/products/${key}`).then((res) =>
        res.json(),
      ),
    );
  }

  return Promise.all(promises);
}
