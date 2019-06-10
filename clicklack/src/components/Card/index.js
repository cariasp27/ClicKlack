import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" onClick={props.handleClick}>
      <div className="img-container">
      <p className="card-text">Click Count: {props.count}</p>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
