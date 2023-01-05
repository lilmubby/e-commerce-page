import Logo from "./Logo";
import NavBar from "./NavBar";
import Profile from "./Profile";
import menu from "../assets/images/icon-menu.svg";
// import close from "../assets/images/icon-close.svg";
// import { useState } from "react";

function Header(props) {
  
  return (
    <header className="flex">
      <div className="logo-container flex">
        <button className="menu-btn">
          <img src={menu} alt="Menu" className="menu" onClick={props.clicked} />
          <span>Menu</span>
        </button>
        <Logo />
        <NavBar
          className={props.click ? "displayNav" : "navigation"}
          handleClick={props.closeNav}
        />
      </div>
      <Profile count={props.count} addToCart={props.addToCart} />
    </header>
  );
}

export default Header;
