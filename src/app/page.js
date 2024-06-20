import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Slider from "./components/slider/slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#212121]">
        <Navbar/>
        <Slider/>
        <Footer/>
    </main>
  );
}
