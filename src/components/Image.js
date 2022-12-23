// import product from "../assets/images/image-product-1.jpg";

import { picture } from "./list";
import { useState } from "react";

function Image() {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      className={"img-grid"}
      // {onClick={lightBoxClass}}
    >
      <img src={picture[imgIndex].pic} alt="item" className="item" />
      <div className="thumbs-container thumbs-flex">
        {picture.map((thumbs, index) => {
          return (
            <img
              key={thumbs.key}
              src={thumbs.thumbnail}
              alt="item"
              className="thumb"
              onClick={() => {
                setImgIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Image;
