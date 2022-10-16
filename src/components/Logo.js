import logo from "../assets/images/logo.svg";
function Logo() {
  return (
    <a href="#home">
      <img src={logo} alt="logo" className="logo" />
    </a>
  );
}

export default Logo;
