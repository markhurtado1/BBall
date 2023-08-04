import React from 'react';

function Search( { text, setText } ) {
  return (
    <div className='searchBar'>
      <input type="text" value={text} onChange={(event) => {
      setText(event.target.value)
      }} />
      <button className="searchBtn" onClick={(event) => {
        console.log('click')
        event.preventDefault();
        setText('');
      }}> Go</button>
      <button className="clearBtn" onClick={(event) => {
      }}>Clear</button>
    </div>
  )
}

export default Search;