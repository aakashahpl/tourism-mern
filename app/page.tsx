import Image from "next/image";
import MapboxMap from "./components/mapbox";
import Navbar from "./components/navbar";
import Homeo from "./components/home";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      {/* <MapboxMap /> */}
      <Homeo />
    </main>
  );
}
