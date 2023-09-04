import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Header({ servicesRef }) {
  const handleClick = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-custom-black min-h-screen md:flex md:flex-col md:justify-center">
      <NavBar />
      <header className="flex flex-col justify-center items-center p-6 md:p-12">
        <h2 className="text-3xl md:text-6xl text-center text-custom-white mb-8">
          WE HELP ARTISTS TO GROW <br /> A{" "}
          <span className="inline-block hover:scale-125 transition duration-500 ease-in-out">
            REAL
          </span>{" "}
          FANBASE
        </h2>
        <div className="flex justify-center pt-5 mb-16 md:mb-32">
          <video
            width={750}
            height={750}
            controls
            className="rounded-xl border-4 border-gray-300"
          >
            <source
              src="https://d3g56pywmp84r0.cloudfront.net/intro-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="absolute bottom-10 left-0 right-0 flex justify-center animate-custom-bounce cursor-pointer"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faChevronDown} size="2x" color="#fff" />
        </div>
      </header>
    </div>
  );
}

export default Header;
