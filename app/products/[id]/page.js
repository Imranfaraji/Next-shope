import { products } from "../../data/products";

export default function ProductDetails({ params }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p className="p-6 text-center">Product not found</p>;
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-base-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-6">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <p className="text-gray-700 mb-4">{product.details}</p>
        <p className="text-xl font-semibold mb-4">Price: {product.price}</p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}
