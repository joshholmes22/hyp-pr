import Image from "next/image";
import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const NavLink = ({ children, href }) => {
    return (
      <div className="border-b border-transparent hover:border-current transition-all duration-500 ease-out hover:border-custom-white">
        <a href={href}>
          <span className="text-lg text-custom-white">{children}</span>
        </a>
      </div>
    );
  };

  return (
    <div className="flex justify-between items-center p-5 flex-col">
      <div className="flex content-center">
        <div className="cursor-pointer">
          <Image
            src="/images/Hyp-PR-logo.svg"
            alt="My logo"
            width={200}
            height={100}
            className="hover:scale-125 transition duration-500 ease-in-out"
          />
        </div>

        <div
          className="md:hidden cursor-pointer hover:scale-110 transition duration-500 ease-in-out flex items-center"
          onClick={() => setShowMenu(!showMenu)}
          style={{ transform: showMenu ? "rotate(90deg)" : "" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-custom-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {!showMenu ? (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0
                5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0
                5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            ) : (
              // This is the X icon
              <path
                fillRule="evenodd"
                d="M10 11.414l4.95 4.95 1.414-1.414L11.414
                    10l4.95-4.95-1.414-1.414L10 8.586 5.05 3.636
                    3.636 5.05 8.586 10l-4.95 4.95 1.414 1.414L10
                    11.414z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </div>
      </div>

      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } md:hidden flex-col gap-4 text-xl text-center pt-5`}
      >
        <NavLink href="#">HOME</NavLink>
        <NavLink href="#services">SERVICES</NavLink>
        <NavLink href="#reviews">REVIEWS</NavLink>
        <NavLink href="#work">OUR WORK</NavLink>
        <NavLink href="#contact">CONTACT US</NavLink>
      </div>

      {/* This is the desktop version of the navbar */}
      <div className="hidden md:flex gap-7 text-xl pt-5">
        <NavLink href="#">HOME</NavLink>
        <NavLink href="#services">SERVICES</NavLink>
        <NavLink href="#reviews">REVIEWS</NavLink>
        <NavLink href="#work">OUR WORK</NavLink>
        <NavLink href="#contact">CONTACT US</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
