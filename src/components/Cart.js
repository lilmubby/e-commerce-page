import item from "../assets/images/image-product-1.jpg";
import deleted from "../assets/images/icon-delete.svg";

function Cart(props) {
  return (
    <div className="cart-box">
      <h3 className="cart-box-header">Cart</h3>
      <div className="cart-details flex">
        <img src={item} alt="item" className="item" />
        <div className="cart-product-details">
          <h4>Autumn Limited Edition...</h4>
          <p className="calc">
            $125.00 x {props.count}
            <span>$375.00</span>
          </p>
        </div>
        <img src={deleted} alt="delete" className="delete-cart" />
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}
export default Cart;
