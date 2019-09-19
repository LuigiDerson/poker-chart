import React from 'react';
import PlayerOptions from './PlayerOptions';

export default class Player extends React.Component {
    render() {
        return (
            <div className="players">
                {this.props.players.map((player, index) => {
                   return (
                        <div className="player-wrapper" key={index}>
                            <div className="player" key={player.name}>{player.name}</div>
                            <PlayerOptions fold={this.props.fold} />
                        </div> 
                   );
                })}         
            </div>
        );
    }
}