import React from 'react'
import PlayerOptions from './PlayerOptions'

const Player = ({ user, players, currentPlayer, handleOption }) => (
  <div className="players">
    {players.map((player, index) => {
      const current =
        currentPlayer === player ? 'player current-player' : 'player'
      const playerWrapper = user === player ? 'user-wrapper' : 'player-wrapper'
      return (
        <div className={playerWrapper} key={index}>
          <div className={current} key={player.name}>
            {player.name}
          </div>
          <PlayerOptions
            current={currentPlayer}
            player={player}
            handleOption={handleOption}
          />
        </div>
      )
    })}
  </div>
)

export default Player
