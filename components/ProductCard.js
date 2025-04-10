import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ imageUrl, name, formattedPrice, description, className }) => {
  return (
    <div className={`relative bg-slate-50 max-w-[20rem] rounded-xl p-4 ${className}`}>
      <Image
        src={
          imageUrl ||
          "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        alt="Product Image"
        width={500}
        height={500}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-gray-700 font-semibold ">{formattedPrice}</p>
      </div>
      <div className="pt-2 text-sm tracking-tight line-clamp-2 ">
        {description}
      </div>
      <div className="pt-10 w-full ">
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;
