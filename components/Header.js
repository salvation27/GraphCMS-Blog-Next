import React, { useContext } from "react";
import Link from "next/link";
const cat = [
  { name: "11111", slug: "1111" },
  { name: "2222", slug: "2222" },
  { name: "33333", slug: "3333" },
];
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {cat.map((item) => (
            <Link href={`/category/${item.slug}`} key={item.slug}>
              <span className="md:float-right mt-1 align-middle text-black ml-4 font-semibold cursor-pointer">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
