import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f2ef] flex flex-col ">
      <Navbar />
    </div>
  );
}
