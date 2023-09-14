import Image from "next/image";
import Navbar from "./components/navbar";
import Homeo from "./components/home";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Homeo />
    </main>
  );
}
