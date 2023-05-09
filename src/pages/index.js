import NavBar from "@/components/NavBar";
import "../app/globals.css";
import Header from "@/components/Header";
import Services from "@/components/Services";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Services />
    </div>
  );
}

export default HomePage;
