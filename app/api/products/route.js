import { connectDB } from "@/app/lib/mongodb";
import Product from "../models/Product";


export async function GET() {
  await connectDB();
  const products = await Product.find({});
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const newProduct = await Product.create(body);

  return new Response(JSON.stringify(newProduct), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
