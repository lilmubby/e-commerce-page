import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";

function Details(props) {
  return (
    <div className="details">
      <h1>Sneaker Company</h1>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-container flex">
        <h3>
          $125.00 <span>50%</span>
        </h3>
        <p>$250.00</p>
      </div>
      <div className="add-container flex">
        <div className="plus flex">
          <img
            src={minus}
            alt="minus-sign"
            className="minus"
            onClick={props.minusClick}
          />
          <p>{props.count}</p>
          <img
            src={plus}
            alt="plus-sign"
            className="plus"
            onClick={props.plusClick}
          />
        </div>
        <button className="add-to-cart flex" onClick={props.addCart}>
          <img src={cart} alt="cart-button" />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default Details;
