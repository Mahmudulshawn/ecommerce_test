import React, { Suspense } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/getProducts";

const FeaturedProductList = async () => {
  const products = await getProducts();
  
  return (
    <div className="w-full">
      <div className="text-2xl font-semibold pb-4 tracking-tight ">Todays Best Deals For You!</div>
      <div className="w-full flex items-center gap-4 overflow-x-scroll scrollbar-hide ">
        {products.map((product, i) => (
          <Suspense key={i} fallback={"...loading"}>
              <ProductCard
              key={i}
              name={product.name}
              // imageUrl={product.media?.mainMedia?.image?.url}
              formattedPrice={product.priceData?.formatted?.price}
              description={product.description}
              />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductList;
