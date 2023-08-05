import React, { useState, useEffect } from 'react';

function Player ({entry, data}) {

  const [playerInfo, setPlayerInfo] = useState(null);
  console.log(playerInfo)

  if (!entry) {
    return (
      <div></div>
    )
  }

  //   useEffect(() => {
  //   if (data) {
  // fetch(`https://www.balldontlie.io/api/v1/stats?playerids[]=${data.data.id}`)
  // .then((res2) => res2.json())
  // .then((json2) => setPlayerInfo(json2))
  //   }
  // }, [data.data.id])

// const getPlayerStats = function (id) {
//   if (entry) {
//     useEffect(() => {
//     fetch(  fetch(`https://www.balldontlie.io/api/v1/stats?playerids[]=${entry.id}`)
//      .then((res2) => res2.json())
//      .then((json2) => setPlayerInfo(json2)))
// })}
// }

    // getPlayerStats(entry.id)

  return (
    <div className="playerCard">
      {entry.first_name} {entry.last_name} {entry.position} {entry.team.full_name}
    </div>
  )
};

export default Player;