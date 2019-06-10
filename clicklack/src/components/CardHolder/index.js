import React from "react";
import Card from "../Card";
import "./style.css";
import cards from "../../cards.json";

class CardHolder extends React.Component {
  state = {
    cards: cards,
    count: 0
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

render(){  return (
    <div className="row">
        <div className="col-lg-10 cardholder">
        {this.state.cards.map(card => (
          <Card
            count={this.state.count}
            onClick={this.handleClick}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        </div>
    </div>
  );
}
}

export default CardHolder;
