import item from "../assets/images/image-product-1.jpg";

function Image() {
  return (
    <div className="img-container">
      <img src={item} alt="item" className="item" />
    </div>
  );
}

export default Image;
