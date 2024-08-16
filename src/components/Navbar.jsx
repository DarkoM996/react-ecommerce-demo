import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-20  border-b border-neutral-300">
      <div className="flex justify-between items-center w-full h-full px-6">
        <a href="/" className="text-3xl font-semibold text-red-400">
          TypeLogo
        </a>
        {/* another div */}
        <ul className="flex justify-center items-center gap-6">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Shopping Icon */}
        <MdOutlineShoppingBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
