import Logo from "./Logo";
import NavBar from "./NavBar";
import Profile from "./Profile";
import menu from "../assets/images/icon-menu.svg";
// import close from "../assets/images/icon-close.svg";
// import { useState } from "react";

function Header(props) {
  // const [click, setClick] = useState(false);

  // function clicked() {
  //   setClick(true);
  // }

  // function closeNav() {
  //   setClick(false);
  // }
  return (
    <header className="flex">
      <div className="logo-container flex">
        <button className="menu-btn">
          <img src={menu} alt="Menu" className="menu" onClick={props.clicked} />
          {/* <img src={close} alt="Close" className="close" /> */}
          <span>Menu</span>
        </button>
        <Logo />
        <NavBar
          className={props.click ? "displayNav" : "navigation"}
          handleClick={props.closeNav}
        />
      </div>
      <Profile count={props.count} />
    </header>
  );
}

export default Header;
