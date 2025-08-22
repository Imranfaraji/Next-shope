import Link from "next/link";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-base-100">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      <div className="responsive grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <Link href={`/products/${product.id}`}>
                  <button className="btn btn-sm btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
