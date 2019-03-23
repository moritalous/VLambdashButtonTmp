import React from 'react';

import Const from '../Const'

function AddFunctionItem(props){
  let f = props.children;
  
  const functionName = f.FunctionName
  const description = f.Description
  const runtime = f.Runtime
  return(
    <div>
      
      Name: {functionName}
      <br></br>
      Runtime: {runtime}
      <br></br>
      Description: {description}
      <br></br>
      <button  onClick={() => addFunction(functionName, description, runtime)}>Add!</button>
      <hr></hr>
    </div>
  );
}

function addFunction(functionName, description, runtime) {

  const storage = localStorage;

  let functions = storage.getItem(Const.FUNCTIONS)

  functions = functions ? JSON.parse(functions) : []

  const f = {
    functionName: functionName,
    description: description,
    runtime: runtime
  }
  functions.push(f)



  storage.setItem(Const.FUNCTIONS, JSON.stringify(functions))
}

export default AddFunctionItem;