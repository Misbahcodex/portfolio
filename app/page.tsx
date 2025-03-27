import Image from "next/image";
import Navbar from "./components/navbar";
import MovingCards from "./components/movingCards";
import { div } from "framer-motion/client";
import Cards from "./components/cards";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#f4f2ef]  ">
        <Navbar />
      </div>
      <MovingCards />
      <Cards />
    </>
  );
}
