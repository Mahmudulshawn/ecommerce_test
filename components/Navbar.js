import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavIcons from "./NavIcons";
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="px-4 min-h-10 flex justify-between items-center">
      <div className="logo flex items-center justify-center">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={200} height={200} alt="Logo" />
        </Link>
      </div>

      <nav className="font-semibold flex items-center justify-center gap-8">
        <Link href="/">Category</Link>
        <Link href="/">All Products</Link>
        <Link href="/">What&apos;s New</Link>
      </nav>

      <div className="flex items-center justify-center gap-4">
        <SearchBar />
        <NavIcons />
      </div>
    </div>
  );
};

export default Navbar;

// import Link from "next/link";
// import Menu from "./Menu";
// import Image from "next/image";
// import SearchBar from "./SearchBar";
// import NavIcons from "./NavIcons";

// const Navbar = () => {
//   return (
//     <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
//       {/* MOBILE */}
//       <div className="h-full flex items-center justify-between md:hidden">
//         <Link href="/">
//           <Image src="/logo.png" alt="" width={200} height={200} />
//         </Link>
//         <Menu />
//       </div>
//       {/* BIGGER SCREENS */}
//       <div className="hidden md:flex items-center justify-between gap-8 h-full">
//         {/* LEFT */}
//         <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
//           <Link href="/" className="flex items-center gap-3">
//             <Image src="/logo.png" alt="" width={200} height={200} />
//           </Link>
//           <div className="hidden xl:flex gap-4">
//             <Link href="/">Category</Link>
//             <Link href="/">All Products</Link>
//             <Link href="/">What&apos;s New</Link>
//             <Link href="/">Contact</Link>
//           </div>
//         </div>
//         {/* RIGHT */}
//         <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
//           <SearchBar />
//           <NavIcons />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
