import { Link, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";
// import { defer } from "react-router-dom";

// Use defer() to showcase progressive loading (tiny dataset here, but pattern matters)
export async function loader() {
  const listPromise = fetch("/data/products.json").then(r => {
    if (!r.ok) throw new Response("Failed to load products", { status: 500 });
    return r.json();
  });
  return defer({ products: listPromise });
}

export default function Products() {
  const data = useLoaderData();
  return (
    <div>
      <h2>Products</h2>
      <Suspense fallback={<p>Loading products…</p>}>
        <Await resolve={data.products}>
          {(products) => (
            <ul style={{ lineHeight: 1.8 }}>
              {products.map(p => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`}>{p.name}</Link> — ₹{p.price}
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
