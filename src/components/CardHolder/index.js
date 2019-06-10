import React from "react";
import Card from "../Card";
import Title from "../Title";
import "./style.css";
import cards from "../../cards.json";


class CardHolder extends React.Component {
  state = {
    cards: cards,
    count: 0
    // clickedcards: []
  };

  handleClick = () => {
    // if card is in clicked cards, reset game.
    // else
    // shuffle cards array
    // let newcards = result of array shuffle
    this.setState({
      // cards: newcards,
      count: this.state.count + 1
    });
  }

render(){  return (
    <div className="row">
              <Title>ClicKlack Score:{this.state.count}</Title>
        <div className="col-lg-10 cardholder">
        {this.state.cards.map(card => (
          <Card
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
