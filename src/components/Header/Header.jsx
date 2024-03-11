import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./logo.png" alt="logo" width={100} />

        {/* menu */}
        <div className={`flexCenter h-menu ${menuOpened ? 'open' : ''}`}>
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="button">
            <a href="mailto:zainkeepscode@gmail.com">Contact</a>
          </button>
        </div>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
