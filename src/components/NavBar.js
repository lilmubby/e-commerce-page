import close from "../assets/images/icon-close.svg";
function NavBar(props) {
  return (
    <nav className={props.className}>
      <img
        src={close}
        alt="Close-Menu Button"
        className="close"
        onClick={props.handleClick}
      />
      <ul>
        <li>
          <a href="#Collections">Collections</a>
        </li>
        <li>
          <a href="#Men">Men</a>
        </li>
        <li>
          <a href="#Women">Women</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
