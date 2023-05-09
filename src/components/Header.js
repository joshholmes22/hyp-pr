import Image from "next/image";
import intro from "../../public/images/intro-placeholder.svg";

function Header() {
  return (
    <header>
      <h2 className="text-3xl text-center">
        WE HELP ARTISTS TO GROW A{" "}
        <span className="inline-block hover:scale-125 transition duration-500 ease-in-out">
          REAL
        </span>{" "}
        FANBASE
      </h2>
      <div className="flex md:justify-center pt-5">
        <Image src={intro} alt="Introduction Video" width={850} height={850} />
      </div>
    </header>
  );
}

export default Header;
