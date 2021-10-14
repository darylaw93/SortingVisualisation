import "./App.css";
import React, { useState, useReducer } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Graph from "./components/Graph.js";

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let current = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = current;
      }
    }
  }
  return arr;
};

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [state, dispatch] = useReducer(reducer, "");
  let arr = [];

  function reducer(state, action) {
    switch (action.type) {
      case "bubble":
        return console.log("bubble sort activated"), bubbleSort(dataArray);
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
  const generateArray = (event) => {
    event.preventDefault();
    arr = [];
    for (let i = 0; i < 40; i++) {
      console.log("generating...");
      let value = Math.ceil(Math.random() * 99);
      arr.push(value);
    }
    setDataArray(arr);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Brand onClick={generateArray}>Generate</Navbar.Brand>
          <Navbar.Brand onClick={() => dispatch({ type: "bubble" })}>
            Bubble Sort
          </Navbar.Brand>
          {/* <Navbar.Brand onClick={sort}>Quick Sort</Navbar.Brand> */}
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
      <Graph data={dataArray} />
    </div>
  );
}

export default App;
