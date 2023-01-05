import Details from "./Details";
import Image from "./Image";
// import { useState } from "react";
// import Cart from "./Cart";

function Main(props) {
  // 
  return (
    <main>
      <Image />
      <Details
        minusClick={props.minusClick}
        count={props.count}
        plusClick={props.plusClick}
        handleCart={props.handleCart}
      />
    </main>
  );
}

export default Main;
