"use client"; // Required if using event handlers in Next.js App Router

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Herosection from "./herosection";

const Navbar = () => {
  return (
    <div
      className="min-h-screen bg-cover absolute w-[80%] h-[100%] ml-[160px]"
      style={{ backgroundImage: "url('/bg-img.svg')" }} // Inline background image
    >
      <nav className="h-[60px] flex items-center justify-between bg-[#e7e0e0] rounded-[25px] px-4 mt-5 mx-[250px] shadow-md">
        {/* Logo */}
        <Image src="/hafiz-usman.svg" alt="Logo" width={100} height={30} />

        <div className="border-solid border-[#9c9c9c] border-t border-r-0 border-b-0 border-l-0 w-[3.3%] h-0 absolute mt-1 right-[73.73%] left-[28.96%] transform rotate-[90.43deg]"></div>
        <div className="border-solid border-[#9c9c9c] border-t border-r-0 border-b-0 border-l-0 w-[3.3%] h-0 absolute mt-1 right-[9.12%] left-[67.58%] transform rotate-[90.43deg]"></div>

        {/* Navigation Links */}
        <div className="flex gap-3">
          <Link
            href="/"
            className="text-black hover:bg-[#d9d9d9] px-4 py-2 rounded-lg font-sans text-base"
          >
            Home
          </Link>
          <Link
            href="/case-studies"
            className="text-black hover:bg-[#d9d9d9] px-4 py-2 rounded-lg font-sans text-base"
          >
            Case Studies
          </Link>
          <Link
            href="/blogs"
            className="text-black hover:bg-[#d9d9d9] px-4 py-2 rounded-lg font-sans text-base"
          >
            Blogs
          </Link>
          <Link
            href="/pricing"
            className="text-black hover:bg-[#d9d9d9] px-4 py-2 rounded-lg font-sans text-base"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="text-black hover:bg-[#d9d9d9] px-4 py-2 rounded-lg font-sans text-base"
          >
            Resources
          </Link>
        </div>

        {/* Button */}
        <Link
          href="/contact"
          className="bg-black hover:bg-[#4b4b4b] text-white px-4 py-2 rounded-lg"
        >
          Work With Us
        </Link>
      </nav>

      <Herosection />
    </div>
  );
};

export default Navbar;
