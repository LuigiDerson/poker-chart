import React from 'react';
import PlayerOptions from './PlayerOptions';

export default class Player extends React.Component {
    render() {
        return (
            <div className="players">
                {this.props.players.map((player, index) => {
                    const current = this.props.currentPlayer === player ? "player current-player" : "player";
                   return (
                        <div className="player-wrapper" key={index}>
                            <div className={current} key={player.name}>{player.name}</div>
                            <PlayerOptions 
                                handleOption={this.props.handleOption}
                            />
                        </div> 
                   );
                })}         
            </div>
        );
    }
}