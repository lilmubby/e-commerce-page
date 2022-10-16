import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);

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
  // function displayCart() {
  //   setClick(true);
  //   console.log(true);
  // }
  // function handleCart() {
  //   console.log(count);
  // }

  return (
    <div className="App">
      <Header
        clicked={clicked}
        closeNav={closeNav}
        click={click}
        count={count}
      />
      <Main minusClick={minusClick} plusClick={plusClick} count={count} />
    </div>
  );
}

export default App;
