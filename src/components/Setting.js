import React, { useState } from 'react';

import Const from './../Const'

function Setting(){
  
    const storage = localStorage;

    const sAccessKeyId = storage.getItem(Const.ACCESS_KEY) ? storage.getItem(Const.ACCESS_KEY) : ""
    const sScretAccessKey = storage.getItem(Const.SECRET_KEY) ? storage.getItem(Const.SECRET_KEY) : ""
    const sRegion = storage.getItem(Const.REGION) ? storage.getItem(Const.REGION) : ""
    
    const [accessKeyId, setAccessKeyId] = useState(sAccessKeyId);
    const [secretAccessKey, setSecretAccessKey] = useState(sScretAccessKey);
    const [region, setRegion] = useState(sRegion);

    let option = []
    for (let r of Const.REGIONS) {
        option.push(<option key={r} value={r}>{r}</option>)
    }

    return (
      <div style={{width:'fit-content', textAlign:'left', margin:'auto'}}>
        Access Key ID
        <br></br>
        <input type="text" style={{width:'100%'}} id="aws_access_key_id" value={accessKeyId} onChange={(e) => setAccessKeyId(e.target.value)}></input>
        <br></br>
        Secret Access Key
        <br></br>
        <input type="text" style={{width:'100%'}} id="aws_secret_access_key" value={secretAccessKey} onChange={(e) => setSecretAccessKey(e.target.value)}></input>
        <br></br>
        Region
        <br></br>
        <select style={{width:'100%'}} onChange={(e) => setRegion(Const.REGIONS[e.target.selectedIndex])} defaultValue={region}>
        {option}
        </select>
        <br></br><br></br>
        <button style={{width:'100%'}} onClick={() => save(accessKeyId, secretAccessKey, region)}>Save</button>
      </div>
    );
}

function save(accessKeyId, secretAccessKey, region) {
  const storage = localStorage;

  storage.setItem(Const.ACCESS_KEY, accessKeyId);
  storage.setItem(Const.SECRET_KEY, secretAccessKey);
  storage.setItem(Const.REGION, region);
}

export default Setting;
