import React, { useState } from 'react';
import Player from './Player.jsx'

function PlayerList ( {data} ) {

  if (!data.data) {
    return (
      <div>Search for a Player!</div>
    )
  }
    return (
      <div>
        {data.data.map((entry) => (<Player entry={entry}/>))}
    <Player/>
    </div>
  );
}

export default PlayerList;