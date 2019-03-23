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
      console.log(f)
      list.push(<DashButton key={f.functionName}>{f}</DashButton>)
    }
    setItem(list)  
  }, [])

  let emptyHiddenStyle = (item.length> 0) ? {visibility:'visible'} : {visibility:'hidden'}
  let emptyVisibleStyle = (item.length> 0) ? {visibility:'hidden'} : {visibility:'visible'}

  return(
    <div style={{width:'100%'}}>
      <div style={{width:'fit-content', textAlign:'left', margin:'auto'}}>
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