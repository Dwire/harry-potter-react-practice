import React from 'react';

const Filter = (props) => {

  return (
    <div id="nav">
      Filter By Name: <input type="text" value={props.userInput} onChange={props.handleOnChange}/>
    </div>
  )
}

export default Filter;
