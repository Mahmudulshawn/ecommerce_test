import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavIcons from "./NavIcons";
import SearchBar from "./Searchbar";
// import { Menu } from "lucide-react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="relative mx-auto px-2 w-full min-h-10 flex justify-between items-center">

      {/* MOBILE */}
      <div className="h-full w-full flex items-center justify-between md:hidden">
        <Link href="/">
          <Image src="/logo.png" alt="" width={70} height={70} />
        </Link>
        <Menu />
      </div>

      {/* DESKTOP */}
      <div className="w-full hidden md:flex justify-between items-center gap-8 h-full ">
        <div className="logo flex items-center justify-between gap-2 ">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={70} height={70} alt="Logo" />
          </Link>
          <Link href={"/"} className="text-2xl tracking-wide pt-3 font-semibold ">
            Campus<span className="text-orange-700 ">Merch</span>
          </Link>
        </div>
        <nav className="font-semibold hidden xl:flex items-center justify-center gap-4">
          <Link href="/">Category</Link>
          <Link href="/">Products</Link>
          <Link href="/">New</Link>
          <Link href="/">Contact</Link>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
