import Details from "./Details";
import Image from "./Image";
// import { useState } from "react";
// import Cart from "./Cart";

function Main(props) {
  // const [count, setCount] = useState(0);

  // function minusClick() {
  //   count <= 0 ? setCount(0) : setCount(count - 1);
  // }
  // function plusClick() {
  //   setCount(count + 1);
  // }
  function handleCart() {
    console.log(props.count);
  }
  return (
    <main>
      <Image />
      <Details
        minusClick={props.minusClick}
        count={props.count}
        plusClick={props.plusClick}
        addCart={handleCart}
      />
    </main>
  );
}

export default Main;
