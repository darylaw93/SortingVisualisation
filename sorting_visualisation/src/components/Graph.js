import React from "react";

const Graph = ({data,loading}) => {
  console.log("graph component", data)
    let graphs = data.map((element) => {
    return (
      <div
        className="VerticalBar"
        style={{ height: `${element}px`, width: "10px" }}
      ></div>
    );
  });
      return (
    <>
      {graphs}
    </>
  );
  }

export default Graph;
