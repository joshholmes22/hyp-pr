import Image from "next/image";
import intro from "../../public/images/intro-placeholder.svg";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="h-screen">
      <NavBar />
      <header className="flex flex-col justify-center items-center bg-custom-background h-full md:h-auto">
        <h2 className="text-3xl md:text-6xl text-center text-white">
          WE HELP ARTISTS TO GROW <br /> A{" "}
          <span className="inline-block hover:scale-125 transition duration-500 ease-in-out">
            REAL
          </span>{" "}
          FANBASE
        </h2>
        <div className="flex justify-center pt-5">
          <Image
            src={intro}
            alt="Introduction Video"
            width={850}
            height={850}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
