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

  return(
    <div style={{width:'100vw'}}>
      {item}
      <button onClick={() => {clear();setItem([])}}>Remove All LambdashButton</button>
    </div>
  );
}

function clear() {
  storage.removeItem(Const.FUNCTIONS)
}

export default ButtonList;