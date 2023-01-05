import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  const [addToCart, setAddToCart] = useState(false);

  function clicked() {
    setClick(true);
  }

  function closeNav() {
    setClick(false);
  }

  function minusClick() {
    count <= 0 ? setCount(0) : setCount(count - 1);
  }

  function plusClick() {
    setCount(count + 1);
  }
  function handleCart() {
    setAddToCart(true);
  }

  return (
    <div className="App">
      <Header
        addToCart={addToCart}
        clicked={clicked}
        closeNav={closeNav}
        click={click}
        count={count}
      />
      <Main
        minusClick={minusClick}
        plusClick={plusClick}
        count={count}
        // cart={cart}
        handleCart={handleCart}
      />
    </div>
  );
}

export default App;
