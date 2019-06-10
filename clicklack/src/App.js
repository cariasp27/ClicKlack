import React, { Component } from "react";
import CardHolder from "./components/CardHolder"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>ClicKlack</Title>
        <CardHolder>
        
        </CardHolder>
      </Wrapper>
    );
  }
}

export default App;
