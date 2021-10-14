import React from "react";

const Graph = ({ data, loading }) => {
  
  console.log("graph component", data);
  let graphs = data.map((element, index) => {
    return (
      <div
        className="VerticalBar"
        style={{ height: `${element}px`, width: "10px" }}
        key={index}
      >
        <div style={{marginTop: `${element+5}px`}}>{element}</div>
      </div>
    );
  });
  return <>{graphs}</>;
};

export default Graph;
