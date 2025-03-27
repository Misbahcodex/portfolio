import React from "react";
import { Playfair_Display } from "@next/font/google";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Cards = () => {
  return (
    <div className="relative">
      {" "}
      {/* Make the parent relative */}
      <div
        className="min-h-screen bg-cover absolute w-full h-full bg-[#f4f2ef] z-0"
        style={{ backgroundImage: "url('/dot-bg.svg')" }} // Inline background image
      ></div>
      {/* Content Wrapper */}
      <div className="grid grid-cols-2 pr-24 pl-36 relative z-10">
        <div>
          <p
            className={`${playfair.className} text-4xl md:text-4xl font-semibold text-gray-900 text-start   mt-32 `}
          >
            Your Dedicated Development Partner—No Hiring Headaches.
          </p>
        </div>
        <div className="items-end mt-36 ml-[400px]">
          <a
            href="/case-studies"
            className="p-5 bg-gray-900 text-white rounded-lg text-xl shadow-[0_10px_50px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out items-end transform hover:bg-[#4b4b4b] hover:scale-105 hover:shadow-[0_15px_60px_rgba(0,0,0,0.9)]"
          >
            Book a Call
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-24 mr-10 ml-10">
        {" "}
        <div className="bg-[#d9d9d9] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[350px] relative">
          <img src="/card-1.svg" alt="Icons" className="h-30 p-5" />
          <h1 className="text-2xl font-bold ml-4">Shortest Timelines</h1>
          <p className="p-4">
            It’s time to redefine timelines - we move in days, not weeks. You
            receive progress updates to review every single day.
          </p>
        </div>
        <div className="bg-[#d9d9d9] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[350px] relative">
          {" "}
          <img src="/card-2.svg" alt="Icons" className="h-30 p-5" />{" "}
          <h1 className="text-2xl font-bold ml-4">Get Unlimited Options</h1>{" "}
          <p className="p-4">
            You want options to choose from. We tirelessly refine & present
            multiple options to choose from. You pick your vibe.{" "}
          </p>
        </div>
        <div className="bg-[#d9d9d9] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[350px] relative">
          {" "}
          <img src="/card-3.svg" alt="Icons" className="h-30 p-5" />{" "}
          <h1 className="text-2xl font-bold ml-4">Feels In-House</h1>{" "}
          <p className="p-4">
            Great products aren’t built in silos. We’re not shy to collaborate
            with your product or dev team to build the best product on the
            market.{" "}
          </p>
        </div>
        <div className="bg-[#d9d9d9] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[350px] relative">
          {" "}
          <img src="/card-4.svg" alt="Icons" className="h-30 p-5" />{" "}
          <h1 className="text-2xl font-bold ml-4">Growth-Focused Design</h1>{" "}
          <p className="p-4">
            The moment a user comes to your website to them converting - we take
            complete ownership of your product funnel.{" "}
          </p>
        </div>
        <div className="bg-[#d9d9d9] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[350px] relative">
          {" "}
          <img src="/card-5.svg" alt="Icons" className="h-30 p-5" />{" "}
          <h1 className="text-2xl font-bold ml-4">Deep SaaS Expertise</h1>{" "}
          <p className="p-4">
            We exclusively work to design delightful solutions for B2B SaaS.
            We’ll likely get a hang of your product fairly quickly.
          </p>
        </div>
        <div className="bg-[#d9d9d9] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[350px] relative">
          {" "}
          <img src="/card-6.svg" alt="Icons" className="h-30 p-5" />{" "}
          <h1 className="text-2xl font-bold ml-4">Complete Ownership</h1>{" "}
          <p className="p-4">
            We work on your product like it’s our own, truly helping you like an
            in-house team. We win when you win.{" "}
          </p>
        </div>
      </div>
      <div
        className="min-h-screen bg-cover absolute w-full  bg-[#000000] z-0"
        style={{ backgroundImage: "url('/grop-11.svg')" }} // Inline background image
      >
        {" "}
        <p
          className={`${playfair.className} text-4xl md:text-6xl font-semibold p-44 ml-24 text-white text-start    `}
        >
          Anything you need, Done for you!{" "}
        </p>
        <div className="grid grid-cols-2 gap-6 pr-44 pl-44 mr-24 ml-24">
          {" "}
          <div className="bg-[#1E1D1D] rounded-[25px] border-solid border-[#4a4a4a67] border-[12px] h-[450px] relative">
            <div className="grid grid-cols-2 ml-8">
              <div>
                <h1 className="text-xl font-bold  text-gray-300 mt-10">
                  Custom Web Application Development
                </h1>
              </div>
              <div className="mt-10 ml-32">
                <a
                  href="/case-studies"
                  className="p-4 bg-[#6363636d] text-white mt- rounded-full   transition-all duration-500 ease-in-out items-end transform hover:bg-[#4b4b4b] hover:scale-105 "
                >
                  2-6 Weeks
                </a>
              </div>
            </div>

            <p className="pl-8 pr-8 pt-2 pb-2 text-gray-300 ">
              A custom web application tailored to your business needs ensures
              scalability, performance, and seamless user experience. Whether
              it’s an internal tool or a customer-facing platform, I build
              solutions that drive results.{" "}
            </p>
            <div className="grid grid-cols-2 pt-5 gap-2">
              {[
                "Tailored UI/UX design",
                "Scalable architecture",
                "API integrations",
                "Secure authentication & data handling",
                "Optimized performance & responsiveness",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center  gap-4 pl-4 pr-4 "
                >
                  <IoMdCheckmarkCircleOutline className="text-gray-200 text-2xl flex-shrink-0" />
                  <span className="text-gray-100">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1E1D1D] rounded-[25px] border-solid border-[#4a4a4a67] border-[12px] h-[450px] relative">
            <div className="mt-8 ml-[320px]"></div>

            <div className="bg-[#ffffff] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[300px] ml-6 mt-10 mr-6 relative"></div>
          </div>
          <div className="bg-[#1E1D1D] rounded-[25px] border-solid border-[#4a4a4a67] mt-28 border-[12px] h-[450px] relative">
            <div className="mt-8 ml-[320px]">
              {/* <a
                href="/case-studies"
                className="p-4 bg-[#6363636d] text-white mt- rounded-full   transition-all duration-500 ease-in-out items-end transform hover:bg-[#4b4b4b] hover:scale-105 "
              >
                See Video on Youtube{" "}
              </a> */}
            </div>

            <div className="bg-[#ffffff] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[300px] ml-6 mt-10 mr-6 relative"></div>
          </div>
          <div className="bg-[#1E1D1D] rounded-[25px] border-solid border-[#4a4a4a67] mt-28 border-[12px] h-[450px] relative">
            <div className="grid grid-cols-2 ml-8">
              <div>
                <h1 className="text-xl font-bold  text-gray-300 mt-10">
                  E-Commerce Website Development
                </h1>
              </div>
              <div className="mt-10 ml-32">
                <a
                  href="/case-studies"
                  className="p-4 bg-[#6363636d] text-white mt- rounded-full   transition-all duration-500 ease-in-out items-end transform hover:bg-[#4b4b4b] hover:scale-105 "
                >
                  3-8 Weeks
                </a>
              </div>
            </div>

            <p className="pl-8 pr-8 pt-2 pb-2 text-gray-300 ">
              A high-converting e-commerce platform that enhances customer
              experience and boosts sales. Designed for usability, speed, and
              security, ensuring seamless transactions.
            </p>
            <div className="grid grid-cols-2 pt-5 gap-2">
              {[
                "Custom or Shopify/WooCommerce solutions",
                "Mobile-friendly & optimized performance",
                "Secure payment gateway integration",
                "Inventory & order management",
                "SEO-friendly product pages",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center  gap-4 pl-4 pr-4 "
                >
                  <IoMdCheckmarkCircleOutline className="text-gray-200 text-2xl flex-shrink-0" />
                  <span className="text-gray-100">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1E1D1D] rounded-[25px] border-solid border-[#4a4a4a67] mt-28 border-[12px] h-[450px] relative">
            <div className="grid grid-cols-2 ml-8">
              <div>
                <h1 className="text-xl font-bold  text-gray-300 mt-10">
                  SaaS Product Design & Development
                </h1>
              </div>
              <div className="mt-10 ml-32">
                <a
                  href="/case-studies"
                  className="p-4 bg-[#6363636d] text-white mt- rounded-full   transition-all duration-500 ease-in-out items-end transform hover:bg-[#4b4b4b] hover:scale-105 "
                >
                  4-10 Weeks
                </a>
              </div>
            </div>

            <p className="pl-8 pr-8 pt-2 pb-2 text-gray-300 ">
              From idea to execution, I help bring your SaaS product to life
              with intuitive design and scalable development, ensuring seamless
              functionality and high user engagement.
            </p>
            <div className="grid grid-cols-2 pt-5 gap-2">
              {[
                "User-centric UI/UX design",
                "Scalable backend architecture",
                "Subscription & billing system integration",
                "Secure authentication & data storage",
                "Performance optimization & analytics",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center  gap-4 pl-4 pr-4 "
                >
                  <IoMdCheckmarkCircleOutline className="text-gray-200 text-2xl flex-shrink-0" />
                  <span className="text-gray-100">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1E1D1D] rounded-[25px] border-solid mt-28 border-[#4a4a4a67] border-[12px] h-[450px] relative">
            <div className="mt-8 ml-[320px]"></div>

            <div className="bg-[#ffffff] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[300px] ml-6 mt-10 mr-6 relative"></div>
          </div>
          <div className="bg-[#1E1D1D] rounded-[25px] border-solid border-[#4a4a4a67] mb-28 mt-28 border-[12px] h-[450px] relative">
            <div className="mt-8 ml-[320px]"></div>

            <div className="bg-[#ffffff] rounded-[25px] border-solid border-[#ffffff7f] border-[12px] h-[300px] ml-6 mt-10 mr-6 relative"></div>
          </div>
          <div className="bg-[#1E1D1D] rounded-[25px] border-solid mt-28 mb-28 border-[#4a4a4a67] border-[12px] h-[450px] relative">
            <div className="grid grid-cols-2 ml-8">
              <div>
                <h1 className="text-xl font-bold  text-gray-300 mt-10">
                  Landing Page & Funnel Optimization
                </h1>
              </div>
              <div className="mt-10 ml-32">
                <a
                  href="/case-studies"
                  className="p-4 bg-[#6363636d] text-white mt- rounded-full   transition-all duration-500 ease-in-out items-end transform hover:bg-[#4b4b4b] hover:scale-105 "
                >
                  1-3 Weeks
                </a>
              </div>
            </div>

            <p className="pl-8 pr-8 pt-2 pb-2 text-gray-300 ">
              A well-crafted landing page can drastically improve your
              conversion rates. I create high-performing pages that capture
              leads and drive user action effectively.
            </p>
            <div className="grid grid-cols-2 pt-5 gap-2">
              {[
                "Persuasive & engaging copy",
                "A/B testing & conversion tracking",
                "Mobile-friendly & fast loading times",
                "Integration with CRM & marketing tools",
                "SEO & PPC optimization for visibility",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center  gap-4 pl-4 pr-4 "
                >
                  <IoMdCheckmarkCircleOutline className="text-gray-200 text-2xl flex-shrink-0" />
                  <span className="text-gray-100">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Cards;
