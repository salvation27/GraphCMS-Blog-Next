import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";


const Header = () => {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   getCategories().then((cat) => setCategories(cat));
  // }, []);

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
        {/* <div className="hidden md:float-left md:contents">
          {categories.map((item) => (
            <Link href={`/category/${item.slug}`} key={item.slug}>
              <span className="md:float-right mt-1 align-middle text-black ml-4 font-semibold cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
