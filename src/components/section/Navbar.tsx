import React, { JSX } from "react";
import logo from "../../assets/logo.png";
import InfoButtons from "../buttons/InfoButtons";

export const Navbar: React.FunctionComponent = (): JSX.Element => {
  return (
    <nav className="flex justify-between p-2 fixed top-0 left-0 right-0">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="" className="h-20" />
      </a>

      <ul className="flex items-center space-x-5 font-extrabold text-pink-300">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <InfoButtons text="photobooth" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
