import { getProducts } from "@/lib/getProducts";
import Image from "next/image";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded-xl p-4 shadow">
          <Image
            src={product.media?.mainMedia?.image?.url || ""}
            alt="Product Image"
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-gray-700">{product.price?.formatted?.price}</p>
        </div>
      ))}
    </div>
  );
}
