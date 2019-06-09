import React from "react";
import "./style.css";

function CardHolder(props) {
  return (
    <div className="row">
        <div className="col-lg-10 cardholder">{props.children}</div>
    </div>
  );
}

export default CardHolder;
