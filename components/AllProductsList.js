import { getProducts } from "@/lib/getProducts";
import React from "react";
import ProductCard from "./ProductCard";
import { wixClientServer } from "@/lib/wixClientServer";
import CategorySelectorList from "./CategorySelectorList";
import Link from "next/link";

const AllProductsList = async ({ searchParams }) => {
  const category = searchParams?.category;
  const wixClient = await wixClientServer();

  const products = await getProducts();
  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="w-full">
      <div className="text-2xl text-center font-semibold pb-4 tracking-tight ">
        Products
      </div>
      <div className="flex justify-center items-center gap-8 max-sm:gap-4 my-4">
        {cats.items.map((cat, i) => (
          <Link
            href={`/`}
            key={i}
            className="flex"
          >
            <div
              className={`border px-4 max-sm:px-2 py-2 rounded-3xl max-sm:text-sm ${
                category === cat.slug ? "bg-green-500" : ""
              }`}
            >
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-8 ">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            imageUrl={product.media?.mainMedia?.image?.url}
            name={product.name}
            description={product.description}
            formattedPrice={product.priceData?.formatted?.price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProductsList;
