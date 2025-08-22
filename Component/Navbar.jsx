"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, label }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`px-3 py-2 rounded-xl text-sm font-medium transition
          ${active ? "bg-gray-900 text-white" : "hover:bg-gray-100"}
        `}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full  bg-white/80 backdrop-blur">
      <nav className="responsive px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <Link href="/" className="flex items-center gap-2">
            
            <span className="text-2xl font-bold italic">Next <span className="text-cyan-400">Shop</span></span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" label="Home" />
            <NavLink href="/products" label="Products" />
            <NavLink href="/login" label="Login" />
            <NavLink href="/dashboard/add-product" label="Dashboard" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-3 flex flex-col gap-1">
            <NavLink href="/" label="Home" />
            <NavLink href="/products" label="Products" />
            <NavLink href="/login" label="Login" />
            <NavLink href="/dashboard/add-product" label="Dashboard" />
          </div>
        )}
      </nav>
    </header>
  );
}
