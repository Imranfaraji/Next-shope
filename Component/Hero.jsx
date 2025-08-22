import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-gray-950 py-16">
        <div className="responsive flex items-center justify-between">
            <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Next15 Shop
        </h1>
        <p className="text-gray-700 mb-6">
          Discover our amazing products and manage them easily after login.
        </p>
        <Link
          href="/products"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
        >
          View Products
        </Link>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Product Image</span>
        </div>
      </div>
        </div>

    </div>
  );
}
