import { useRef } from "react";
import NavBar from "@/components/NavBar";
import "../app/globals.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import OurWork from "@/components/OurWork";

function HomePage() {
  const servicesRef = useRef(null);

  return (
    <div className="bg-custom-black">
      <Header servicesRef={servicesRef} />
      <div className="mt-10">
        <Services ref={servicesRef} />
      </div>
      <Reviews />
      <OurWork />
      <Booking />
    </div>
  );
}

export default HomePage;
