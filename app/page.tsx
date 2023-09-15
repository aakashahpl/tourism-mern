import Image from "next/image";
import Navbar from "./components/navbar";
import Homeo from "./components/home";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Homeo />
      <Footer/>
    </main>
  );
}
