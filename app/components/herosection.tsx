import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const herosection = () => {
  return (
    <div>
      <div className="px-[450px] pt-20 flex flex-col gap-2.5 items-start justify-start relative">
        <div className="bg-[#ffffff] flex rounded-[10px] border-solid border-[#e4e4e4] border-x-[6px] border-y-[6px] pt-[8px] pr-5 pb-[6px] pl-2 gap-2 items-center justify-start h-[42px] w-[390px] relative">
          <div className="bg-[#903030] rounded-full ml-5 w-[15px] h-4"></div>
          <div>Website & Product Design for AI B2B Saas</div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center px-6 py-28 ">
        <h1
          className={`${playfair.className} text-6xl md:text-6xl font-semibold text-gray-900`}
        >
          The Only{" "}
          <span
            className={`${playfair.className} text-6xl italic- font-extralight text-[#483b3b73]`}
          >
            Design Agency
          </span>{" "}
          Faster <br />
          Than An{" "}
          <span
            className={`${playfair.className} italic font-extralight text-[#483b3b73]`}
          >
            In-House Team
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Craft an unparalleled user experience for your product with a design
          team that feels like your own.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="/case-studies"
            className="p-5 bg-gray-900 text-white z-10 rounded-lg text-xl  shadow-[0_10px_50px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out transform hover:bg-[#4b4b4b] hover:scale-105 hover:shadow-[0_15px_60px_rgba(0,0,0,0.9)]"
          >
            Book a Call
          </a>

          <a
            href="/case-studies"
            className="p-5 bg-white border border-gray-400 text-xl text-gray-900 rounded-lg  shadow-2xl transition-all duration-500 ease-in-out hover:bg-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-105"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default herosection;
