import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import Cart from "./Cart";
import { useState } from "react";
function Profile(props) {
  const [togglecartDisplay, setTogglecartDisplay] = useState(false);
  function cartDisplay() {
    setTogglecartDisplay((prev) => {
      return !prev;
    });
  }
  return (
    <div className="profile flex">
      <img src={cart} alt="cart" className="cart" onClick={cartDisplay} />
      {props.count > 0 && props.addToCart ?
      (<div className="cart-count">{props.count}</div>):
      props.count === 0 && props.addToCart ?
      null:
      null
      }
      <img src={avatar} alt="avatar" className="avatar" />
      {togglecartDisplay && <Cart count={props.count} addToCart={props.addToCart} />}
    </div>
  );
}

export default Profile;
