import React, { useState, useEffect } from 'react';
// import './App.css';
import Search from './Search.jsx'


function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState('')
  console.log("text", text)

  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/players/${text}`)
      .then((res) => res.json())
      .then((json) => setData(json))
}, [text])

  console.log(data)
  return (
    <div className="App">
      <Search text={text} setText={setText}/>
    </div>
  );
}

export default App;
