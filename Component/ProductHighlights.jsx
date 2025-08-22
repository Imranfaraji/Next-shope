import Link from "next/link";

export default function ProductHighlights() {
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      description: "Track fitness, heart rate & notifications.",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      description: "Noise-cancelling, long battery life.",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      description: "RGB lights & ultra-fast response.",
      price: "$59",
      image:
        "https://i.ibb.co.com/G3sdLxyq/pexels-zeleboba-33475144.jpg",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      description: "Tactile keys with RGB backlight.",
      price: "$89",
      image:
        "https://i.ibb.co.com/3yPzJd29/pexels-fox-58267-3829226.jpg",
    },
  ];

  return (
    <section className="py-12 bg-base-200">
      <div className="responsive">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Product Highlights
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Our best picks for you, at the best price.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{product.price}</span>
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
            <Link href={'/products'}>
            <button className="btn btn-outline btn-primary">
            See All Products
          </button>
            </Link>
          
        </div>
      </div>
    </section>
  );
}
