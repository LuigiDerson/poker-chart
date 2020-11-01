import React from "react";
import PlayerOptions from "./PlayerOptions";

export default class Player extends React.Component {
  render() {
    const currentPlayer = this.props.currentPlayer;
    const user = this.props.user;
    return (
      <div className="players">
        {this.props.players.map((player, index) => {
          const current =
            currentPlayer === player ? "player current-player" : "player";
          const playerWrapper =
            user === player ? "user-wrapper" : "player-wrapper";
          return (
            <div className={playerWrapper} key={index}>
              <div className={current} key={player.name}>
                {player.name}
              </div>
              <PlayerOptions
                current={currentPlayer}
                player={player}
                handleOption={this.props.handleOption}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
