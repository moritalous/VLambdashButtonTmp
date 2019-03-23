import React, { useState } from 'react';

import Const from '../Const'
import logo from '../AWS-Lambda_Lambda-Function_light-bg.png'
import './DashButton.css';

import AWS from 'aws-sdk';

const storage = localStorage;

AWS.config.update({
  accessKeyId: storage.getItem(Const.ACCESS_KEY),
  secretAccessKey: storage.getItem(Const.SECRET_KEY),
  region: storage.getItem(Const.REGION)
});

function DashButton(props) {
  let f = props.children;

  const functionName = f.functionName
  const description = f.description
  const runtime = f.runtime

  const [message, setMessage] = useState([''])

  return (
    <div style={{width:'280px', margin:'4px'}}>
      <div className='container1' onClick={() => confirmInvoke(functionName, description, runtime, setMessage)}>
        <div className='container2' >
          <div className='label-area'>
            <div className='label'>
              {functionName}
            </div>
          </div>
        </div>
        <img src={logo} className='button-img' alt={logo}></img>
      </div>
      <div style={{ width: '100%', border: '0px', height: 'fit-content', marginTop: '10px', backgroundColor: '#101010', color: 'white' }} >{message}</div>
      <br></br>
    </div>
  );
}

function confirmInvoke(functionName, description, runtime, setMessage) {
  let answer = window.confirm('Invoke?')

  if (answer) {
    setMessage('Invoke...')
    invoke(functionName, {}).then(function (result) {
      let message = []
      message.push(<div>StatusCode: {result.StatusCode}</div>)
      message.push(<div>Payload: {result.Payload}</div>)
      setMessage(message)
    });
  } else {
    console.log('cancel')
  }
}

async function invoke(functionName, payload) {
  let lambda = new AWS.Lambda();

  let params = {
    FunctionName: functionName,
    Payload: JSON.stringify(payload),
  };
  const response = await lambda.invoke(params).promise();
  return response;
}

export default DashButton;