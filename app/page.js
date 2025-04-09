import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/getProducts";
import Image from "next/image";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="mt-10">
      Page
    </div>
  );
}
