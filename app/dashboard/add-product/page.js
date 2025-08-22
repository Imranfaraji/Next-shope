"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function AddProductPage() {
  const { data: session } = useSession();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    details: "",
    image: "",
  });

  if (!session) {
    return <p>Please login to add a product.</p>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    alert("Product added!");
    setForm({ name:"", description:"", price:"", details:"", image:"" });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="input input-bordered"/>
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="input input-bordered"/>
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="input input-bordered"/>
        <input name="details" placeholder="Details" value={form.details} onChange={handleChange} className="input input-bordered"/>
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="input input-bordered"/>
        <button type="submit" className="btn btn-primary mt-2">Add Product</button>
      </form>
    </div>
  );
}
