import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide ">
      <div className="font-semibold text-2xl tracking-tight pb-8">Our Top Categories</div>
      <div className="flex gap-4 md:gap-8">
        {cats.items.map((item, i) => (
          <Link
            // href={`/list?cat=${item.slug}`}
            href={"/"}
            className="relative flex-shrink-0 rounded-xl w-[12rem]"
            key={i}
          >
            <div className=" rounded-xl bg-slate-100 w-full h-[15rem] ">
              <h1 className="absolute left-1/2 -translate-x-1/2 top-2 font-semibold text-white z-60">
                {item.name}
              </h1>
              <Image
                // src={item.media?.mainMedia?.image?.url || "/category.png"}
                src={
                  "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                alt=""
                fill
                sizes="20vw"
                className="object-cover rounded-xl h-full"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
