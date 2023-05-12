import NavBar from "@/components/NavBar";
import "../app/globals.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";

function HomePage() {
  return (
    <div className="bg-custom-background">
      <Header />
      <Services />
      <Reviews />
      <Booking />
    </div>
  );
}

export default HomePage;
