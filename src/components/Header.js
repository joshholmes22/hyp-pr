import Image from "next/image";
import intro from "../../public/images/intro-placeholder.svg";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Header({ servicesRef }) {
  const handleClick = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen">
      <NavBar />
      <header className="flex flex-col justify-center items-center bg-custom-black h-full md:h-auto">
        <h2 className="text-3xl md:text-6xl text-center text-custom-white">
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
        <div
          className="animate-bounce mt-10 cursor-pointer"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faChevronDown} size="2x" color="#fff" />
        </div>
      </header>
    </div>
  );
}

export default Header;
