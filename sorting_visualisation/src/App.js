import "./App.css";
import React, { useState, useReducer } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Graph from "./components/Graph.js";

function reducer(state, action) {
  switch (action.type) {
    case "bubble":
      return;
    case "quick":
      return;
    case "merge":
      return;
    case "insertion":
      return;
    default:
      throw new Error();
  }
}

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [state, dispatch] = useReducer(reducer, "");
  let arr = [11, 22, 33, 44, 55, 66, 77];

  const generateArray = (event) => {
    event.preventDefault();
    arr = [];
    for (let i = 0; i < 20; i++) {
      console.log("generating...");
      let value = Math.ceil(Math.random() * 100);
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
          {/* <Navbar.Brand onClick={sort}>Quick Sort</Navbar.Brand> */}
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
      <Graph data={dataArray} />
    </div>
  );
}

export default App;
