"use client";

import { motion } from "framer-motion";
import React from "react";

const MovingCards = () => {
  return (
    <div className="bg-[#f4f2ef]">
      <div className="text-center items-center flex flex-col">
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Trusted by Top SaaS Brands for Superior User Experiences.
        </p>
      </div>

      <div className="relative mx-[200px] overflow-hidden bg-[#f4f2ef]">
        {/* Left Blur Effect */}
        <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-[#f4f2ef] to-transparent z-10"></div>

        {/* Right Blur Effect */}
        <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-[#f4f2ef] to-transparent z-10"></div>

        {/* Moving Icons */}
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-6"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
          >
            {[...Array(10)].map((_, index) => (
              <img key={index} src="/icons.svg" alt="Icons" className="h-50" />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative mx-[200px] mt-6 overflow-hidden bg-[#f4f2ef]">
        {/* Left Blur Effect */}
        <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-[#f4f2ef] to-transparent z-10"></div>

        {/* Right Blur Effect */}
        <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-[#f4f2ef] to-transparent z-10"></div>

        {/* Second Moving Row */}
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-6"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[
              "grop-3",
              "grop-4",
              "grop-5",
              "grop-6",
              "grop-7",
              "grop-8",
              "grop-9",
            ].map((group, index) => (
              <img
                key={index}
                src={`/${group}.svg`}
                alt="Icons"
                className="h-90"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MovingCards;
