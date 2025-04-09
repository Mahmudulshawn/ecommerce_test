import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/getProducts";
import Image from "next/image";

export default async function HomePage() {
  const products = await getProducts();

  return (
    // <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    //   {products.map((product, i) => (
    //     <ProductCard key={i}
    //       name={product.name}
    //       imageUrl={product.media?.mainMedia?.image?.url}
    //       formattedPrice={product.price?.formatted?.price}
    //     />
    //   ))}
    // </div>
    <div className="mt-20">
      Page
    </div>
  );
}
