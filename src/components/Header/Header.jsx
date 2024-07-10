import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

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
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler 
          onOutsideClick={ ()=> {
            setMenuOpened(false);
          } }
        >
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <a href="">Residences</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
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
