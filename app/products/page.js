// app/products/page.jsx
export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Smart Watch X1",
      description: "Track your health with precision sensors and long battery life.",
      price: "$199",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      description: "Advanced AI features with premium design.",
      price: "$299",
    },
    {
      id: 3,
      name: "Smart Band Lite",
      description: "Lightweight, affordable fitness tracking.",
      price: "$99",
    },
    {
      id: 4,
      name: "Smart Watch Ultra",
      description: "Built for explorers with rugged design and GPS.",
      price: "$399",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-lg font-semibold">{product.price}</span>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
