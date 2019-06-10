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
   let cid = id;
   console.log(cid);
   let currentcard = this.state.cards[cid];
   console.log(currentcard)
   let ccards = this.state.clickedcards
   console.log(ccards);
   if (ccards.indexOf(cid) >= 0){
    this.setState({
      count: 0
    });
   }
   else {
   this.state.clickedcards.push(currentcard)
   function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
   let newcards = shuffle(cards)
    // if card is in clicked cards, reset game.
    // else
    // shuffle cards array
    // let newcards = result of array shuffle
    this.setState({
      cards: newcards,
      count: this.state.count + 1
    });
  }
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
