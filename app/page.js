import CategoryList from "@/components/CategoryList";
import FeaturedProductList from "@/components/FeaturedProductList";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import { getProducts } from "@/lib/getProducts";
import Image from "next/image";

export default async function HomePage() {

  return (
    <div className="w-full min-h-screen flex flex-col pb-20 ">
      <div className="w-full px-2">
        <Slider />
      </div>
      <div className="mt-20">
        <CategoryList />
      </div>
      <div className="mt-20 px-2">
        <FeaturedProductList />
      </div>
    </div>
  );
}
