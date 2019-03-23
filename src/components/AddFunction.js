import React, { useState, useEffect  } from 'react';

import AddFunctionItem from './AddFunction-Item'

import AWS from 'aws-sdk';

import Const from '../Const'


function AddFunction(){
  const [item, setItem] = useState([])
  let list = []

  useEffect(() => {
    listFunstions().then(function(result) {

      let sortedFunction = result.Functions.sort(function(a, b){
        if(a.LastModified < b.LastModified) return 1;
        if(a.LastModified > b.LastModified) return -1;
        return 1;
      })

      for(let f of sortedFunction) {
        list.push(<AddFunctionItem key={f.FunctionName}>{f}</AddFunctionItem>)
      }
      setItem(list)
    });
  }, [])

  return(
    <div style={{width:'fit-content', textAlign:'left', margin:'auto'}}>
      {item}
    </div>
  );
}

async function listFunstions() {
  const storage = localStorage;

  AWS.config.update({
    accessKeyId: storage.getItem(Const.ACCESS_KEY),
    secretAccessKey: storage.getItem(Const.SECRET_KEY),
    region: storage.getItem(Const.REGION)
  });

  let lambda = new AWS.Lambda();
  return await lambda.listFunctions({}).promise();
}

export default AddFunction;
