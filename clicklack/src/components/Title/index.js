import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="row">
    <div className="col-12-lg work">
  <h1 className="title">{props.children}</h1>
  </div>
  </div>
  );
}

export default Title;
