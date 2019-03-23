import React, {useState} from 'react';
// import ReactDOM from 'react-dom';

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

  const [message, setMessage] = useState('')

  return(
    <div>
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
      <br></br>
      <textarea style={{width:'90%',border:'0px'}} value={message} readOnly></textarea>
      <hr></hr>
    </div>
  );
}

function confirmInvoke(functionName, description, runtime, setMessage) {
  let answer = window.confirm('Invoke?')

  setMessage('Invoke...')
  
  if(answer) {
    invoke(functionName, {}).then(function(result){
      setMessage(
        'StatusCode:' + result.StatusCode + '\r\n' +
        'Payload:' + result.Payload
      )
      // window.alert(
      //   'StatusCode:' + result.StatusCode + '\r\n' +
      //   'Payload:' + JSON.stringify(result.Payload)
      //   );
    });
  } else {
    console.log('cancel')
  }
}

async function invoke(functionName, payload){
  let lambda = new AWS.Lambda();

  let params = {
    FunctionName: functionName, 
    Payload: JSON.stringify(payload),
   };
  const response = await lambda.invoke(params).promise();
  return response;
}

export default DashButton;