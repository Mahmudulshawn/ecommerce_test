import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import { getProducts } from "@/lib/getProducts";
import Image from "next/image";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="mt-10 w-full min-h-screen">
      <Slider />
    </div>
  );
}
