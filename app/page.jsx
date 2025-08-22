import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import ProductHighlights from "@/Component/ProductHighlights";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
    </div>
  );
}
