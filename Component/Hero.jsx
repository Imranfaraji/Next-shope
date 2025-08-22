import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to Next Shop
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Discover our amazing products and manage them easily after login.
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            View Products
          </Link>
        </div>

        {/* Right image */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="w-80 h-80 md:w-96 md:h-96 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500"
              alt="Product Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
