import React, { Component } from "react";
import CardHolder from "./components/CardHolder"
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

  removeCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>ClicKlack</Title>
        <CardHolder>
        {this.state.cards.map(card => (
          <Card
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        </CardHolder>
      </Wrapper>
    );
  }
}

export default App;
