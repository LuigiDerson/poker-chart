import React from "react";
import Player from "./Player";

const names = ["UTG", "MP", "CO", "BTN", "SB", "BB"];
const players = names.map((player) => ({
  name: player,
  fold: false,
  call: false,
  raise: false,
}));
const checkRound = (state) => (state < 5 ? state + 1 : 0);

export default class TableHand extends React.Component {
  state = {
    players,
    round: 0,
    turn: 0,
    userPosition: 5,
  };

  newRound() {
    this.setState((prevState) => ({
      round: prevState.round + 1,
      userPosition: checkRound(prevState.userPosition),
    }));
  }

  checkGameStatus() {
    const allFold = this.state.players
      .filter((pl) => pl.name !== "BB")
      .every((pl) => pl.fold === true);
    if (this.state.players[this.state.userPosition].fold === true) {
      this.newRound();
      console.log("Round ends");
    } else if (allFold) {
      console.log("Round ends");
    }
  }

  handleOptionChosen = (option) => {
    const currentPlayer = this.state.players[this.state.turn];
    this.setState((prevState) => ({
      turn: checkRound(prevState.turn),
      players: prevState.players.map((p) =>
        currentPlayer.name === p.name ? { ...p, [option]: !p[option] } : p
      ),
    }));
  };

  render() {
    return (
      <div className="table">
        <h1>Round: {this.state.round}</h1>
        <Player
          handleOption={this.handleOptionChosen}
          currentPlayer={this.state.players[this.state.turn]}
          user={this.state.players[this.state.userPosition]}
          players={this.state.players}
        />
      </div>
    );
  }
}

// position: ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB']
