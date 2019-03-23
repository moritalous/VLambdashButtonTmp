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
      <div>
        <input type="text" id="aws_access_key_id" value={accessKeyId} onChange={(e) => setAccessKeyId(e.target.value)}></input>
        <br></br>
        <input type="text" id="aws_secret_access_key" value={secretAccessKey} onChange={(e) => setSecretAccessKey(e.target.value)}></input>
        <br></br>
        <select onChange={(e) => setRegion(Const.REGIONS[e.target.selectedIndex])} defaultValue={region}>
        {option}
        </select>
        <button onClick={() => save(accessKeyId, secretAccessKey, region)}>save</button>
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
