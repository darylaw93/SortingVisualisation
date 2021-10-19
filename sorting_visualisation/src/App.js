import "./App.css";
import React, { useState, useReducer } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Graph from "./components/Graph.js";

let container = document.getElementById("array");
let blocks = document.getElementsByClassName("block");
const swap = (block1, block2) => {
  return new Promise((resolve) => {
    let temp = block1.style.transform;
    block1.style.transform = block2.style.transform;
    block2.style.transform = temp;

    window.requestAnimationFrame(() => {
      console.log(container);
      setTimeout(() => {
        container?.insertBefore(block2, block1);
        resolve();
      }, 500);
    });
  });
};

const bubbleSort = async (delay = 500) => {
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blocks.length - i - 1; j++) {
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#ff4949";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      let value1 = Number(blocks[j].childNodes[0].innerText);
      let value2 = Number(blocks[j + 1].childNodes[0].innerText);
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }
      blocks[j].style.backgroundColor = "#6b5b95";
      blocks[j + 1].style.backgroundColor = "#6b5b95";
    }
    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
};

function App() {
  const [datablocksay, setDatablocksay] = useState([]);
  const [state, dispatch] = useReducer(reducer, "");
  let blocks = [];

  function reducer(state, action) {
    switch (action.type) {
      case "bubble":
        return console.log("bubble sort activated"), bubbleSort(datablocksay);
      case "quick":
        return console.log("quick sort activated");
      case "merge":
        return;
      case "insertion":
        return;
      default:
        throw new Error();
    }
  }

  const generateblocksay = (event) => {
    event.preventDefault();
    blocks = [];
    for (let i = 0; i < 40; i++) {
      console.log("generating...");
      let value = Math.ceil(Math.random() * 99);
      blocks.push(value);
    }
    setDatablocksay(blocks);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Brand onClick={generateblocksay}>Generate</Navbar.Brand>
          <Navbar.Brand onClick={() => dispatch({ type: "bubble" })}>
            Bubble Sort
          </Navbar.Brand>
          {/* <Navbar.Brand onClick={sort}>Quick Sort</Navbar.Brand> */}
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
      <div id="array">
        <Graph data={datablocksay} />
      </div>
    </div>
  );
}

export default App;
