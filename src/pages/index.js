import NavBar from "@/components/NavBar";
import "../app/globals.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import OurWork from "@/components/OurWork";
import Booking from "@/components/Booking";

function HomePage() {
  return (
    <div className="bg-black">
      <NavBar />
      <Header />
      <Services />
      <Reviews />
      {/* <OurWork /> */}
      <Booking />
    </div>
  );
}

export default HomePage;
