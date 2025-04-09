"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavIcons from "./NavIcons";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex justify-between items-center gap-8">
      <div className="flex items-center justify-center">
        <NavIcons />
      </div>
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-gray-200 left-0 top-20 w-full h-[calc(100vh-40px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Category</Link>
          <Link href="/">Products</Link>
          <Link href="/">New</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
