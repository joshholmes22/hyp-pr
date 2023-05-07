import Image from "next/image";

function NavBar() {
  return (
    <div class="flex justify-between items-center p-5">
      <div className="navbar__logo">
        <Image
          src="/images/hypprLogo.png"
          alt="My logo"
          width={200}
          height={100}
        />
      </div>
      <div class="flex gap-7 text-xl">
        <a href="#">SERVICES</a>
        <a href="#">REVIEWS</a>
        <a href="#">OUR WORK</a>
        <a href="#">CONTACT US</a>
      </div>
    </div>
  );
}

export default NavBar;
