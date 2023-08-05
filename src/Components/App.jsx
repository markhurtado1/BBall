import React, { useState, useEffect } from 'react';
// import './App.css';
import Search from './Search.jsx';
import PlayerList from './PlayerList.jsx';
import Player from './Player.jsx'

function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState('')

  console.log("text", text)

  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/players/?search=${text}`)
      .then((res) => res.json())
      .then((json) => setData(json))

    // fetch(`https://www.balldontlie.io/api/v1/stats?playerids[]=${data.data.id}`)
    // .then((res2) => res2.json())
    // .then((json2) => setPlayerInfo(json2))

}, [])


console.log(data.data)


  // useEffect(() => {
  //   if (data) {
  // fetch(`https://www.balldontlie.io/api/v1/stats?playerids[]=${data.data.id}`)
  // .then((res2) => res2.json())
  // .then((json2) => setPlayerInfo(json2))
  //   }
  // }, [data.data.id])


  if (!data) {
    return (
      <div>
          Loading...
        </div>
      )
    }
  return (
    <div className="App">
      <Search text={text} setText={setText}/>
      <PlayerList data={data}/>

    </div>
  );
}

export default App;
