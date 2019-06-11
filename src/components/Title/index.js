import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="col lg 12 header">
    <h1 className="title">{props.children}</h1>
    </div> 
  );
}

export default Title;
