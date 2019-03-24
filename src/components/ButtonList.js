import React, { useState, useEffect  } from 'react';

import Const from '../Const'

import DashButton from './DashButton'

const storage = localStorage;

function ButtonList(){
  const [item, setItem] = useState([])

  useEffect(() => {
    let functions = storage.getItem(Const.FUNCTIONS)
    functions = functions ? JSON.parse(functions) : []
  
    let list = []
    for(let f of functions) {
      list.push(<DashButton key={Math.random()}>{f}</DashButton>)
    }
    setItem(list)  
  }, [])

  let emptyHiddenStyle = (item.length> 0) ? {visibility:'visible'} : {visibility:'hidden'}
  let emptyVisibleStyle = (item.length> 0) ? {visibility:'hidden'} : {visibility:'visible'}

  return(
    <div style={{width:'100%'}}>
      <div style={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {item}
      </div>
      <br></br>
      <button style={emptyHiddenStyle} onClick={() => {clear();setItem([])}}>Remove All LambdashButton</button>
      
      <div style={emptyVisibleStyle}>First, Setting. Next, Add.</div>
    </div>
  );
}

function clear() {
  storage.removeItem(Const.FUNCTIONS)
}

export default ButtonList;