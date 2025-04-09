import Image from "next/image";
import React from "react";

const ProductCard = ({
  imageUrl,
  name,
  formattedPrice,
}) => {
  return (
    <div className="border rounded-xl p-4 shadow">
      <Image
        src={imageUrl || ""}
        alt="Product Image"
        width={500}
        height={500}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-700">{formattedPrice}</p>
    </div>
  );
};

export default ProductCard;
