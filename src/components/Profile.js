import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import Cart from "./Cart";
import { useState } from "react";
function Profile(props) {
  const [clicked, setClicked] = useState(false);
  function cartDisplay() {
    setClicked((prev) => {
      return !prev;
    });
  }
  return (
    <div className="profile flex">
      <img src={cart} alt="cart" className="cart" onClick={cartDisplay} />
      {props.count >= 1 && <div className="cart-count">{props.count}</div>}
      <img src={avatar} alt="avatar" className="avatar" />
      {clicked && <Cart count={props.count} />}
    </div>
  );
}

export default Profile;
