import NavBar from "@/components/NavBar";
import "../app/globals.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import OurWork from "@/components/OurWork";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Services />
      <Reviews />
      <OurWork />
    </div>
  );
}

export default HomePage;
