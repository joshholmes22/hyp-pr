import NavBar from "@/components/NavBar";
import "../app/globals.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Services />
      <Reviews />
    </div>
  );
}

export default HomePage;
