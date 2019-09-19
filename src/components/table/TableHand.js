import React from 'react';
import Player from './Player';

export default class TableHand extends React.Component {
    state = {
        round: 0,
        players: this.props.players,
        turn: 0,
        userPosition: 5
    }

    handleFold = () => {
        const checkRound = (state) => state < 5 ? state + 1 : 0;
        this.setState((prevState) => ({
            turn: checkRound(prevState.turn),
            players: prevState.players.map((player) => !player.fold)
        }))
        console.log(this.state.players)
    }

    render() {
        const turn = this.state.turn;
        const user = this.state.userPosition;
        const players = this.state.players;
        return (
            <div className="table">
                <h1>Round: {this.state.round}</h1>
                <p>Turn: {players[turn].name}</p>
                <Player fold={this.handleFold} players={players}/>
                <p>User position: {players[user].name}</p>
            </div>
        );
    }
}

// position: ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB']