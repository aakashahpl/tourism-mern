import Image from "next/image";
import MapboxMap from "./components/mapbox";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <MapboxMap />
    </main>
  );
}
