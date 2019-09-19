import React from 'react';
import Player from './Player';

const names = ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB'];
const players = names.map(player => ({
    name: player,
    fold: false,
    call: false,
    raise: false
}))
const checkRound = (state) => state < 5 ? state + 1 : 0;

export default class TableHand extends React.Component {
    state = {
        players,
        round: 0,
        turn: 0,
        userPosition: 5
    }

    handleOptionChosen = (option) => {
        const currentPlayer = this.state.players[this.state.turn];
        this.setState((prevState) => ({
            turn: checkRound(prevState.turn),
            players: prevState.players.map(
                (p) => (currentPlayer.name === p.name ? { ...p, [option]: !p[option] } : p)
            )
        }));
    }

    render() {
        const turn = this.state.turn;
        const user = this.state.userPosition;
        const players = this.state.players;
        const currentPlayer = this.state.players[this.state.turn];
        console.log(this.state.players)
        return (
            <div className="table">
                <h1>Round: {this.state.round}</h1>
                <p>Turn: {players[turn].name}</p>
                <Player 
                    handleOption={this.handleOptionChosen}
                    currentPlayer={currentPlayer}
                    players={players}/>
                <p>User position: {players[user].name}</p>
            </div>
        );
    }
}

// position: ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB']