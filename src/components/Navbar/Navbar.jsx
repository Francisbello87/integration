import React from "react";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-8 text-lg" data-scroll-section>
      <div>
        <img src={Logo} alt="" />
      </div>
      <ul className=" flex items-center gap-5 font-Lato">
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
