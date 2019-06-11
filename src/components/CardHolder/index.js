import React from "react";
import Card from "../Card";
import Title from "../Title";
import "./style.css";
import cards from "../../cards.json";



class CardHolder extends React.Component {
  state = {
    cards: cards,
    count: 0,
    clickedcards: []
  };

  handleClick = (id) => {
    if (this.state.count < 9){
    let c_id = id;
    let c_cards = this.state.clickedcards
    if (c_cards.indexOf(c_id) >= 0) {
      this.setState({
                      count: 0,
                      clickedcards: [] });
    }
    else {
      c_cards.push(c_id)

      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
      let newcards = shuffle(cards)
      this.setState({
        cards: newcards,
        count: this.state.count + 1
      });
    }
  }else {
    alert("You Won!");
  }
  }

  render() {
    return (
      <div className="row">
        <Title>ClicKlack Score:{this.state.count}</Title>
        <div className="col-lg-11 cardholder">
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
