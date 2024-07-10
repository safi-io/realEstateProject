import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened((prev) => !prev);
  };

  const getMenuStyle = (menuOpened) => {
    return { right: !menuOpened && "-100%" };
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <Link to="#hero">
        <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler 
          onOutsideClick={ ()=> {
            setMenuOpened(false);
          } }
        >
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <Link to="#residencies">Residences</Link>
            <Link to="#values">Our Value</Link>
            <Link to="#contact">Contact Us</Link>
            <Link to="#getStart">Get Started</Link>
            <button className="button">
              <Link to="#contact">Contact</Link>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon">
          <BiMenuAltRight size={30} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
