import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="responsive flex flex-col md:flex-row justify-between items-center gap-6">
        <p>&copy; {new Date().getFullYear()} Next15 Shop. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </footer>
  );
}
