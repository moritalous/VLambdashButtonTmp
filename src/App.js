import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ButtonList from './components/ButtonList'
import Setting from './components/Setting'
import AddFunction from './components/AddFunction'

function App() {
  return (
    <BrowserRouter basename='/VLambdashButtonTmp'>
      <header >
        <div style={{ position: 'fixed', display:'flex', alignItems:'center', justifyContent:'center', width: '100%', height:'40px', top:'0px', textAlign: 'center', background:'white', borderBottom:'1px grey solid', zIndex:'99'}}>
          <Link to='/'>Home</Link>  /  <Link to='/Setting'>Setting</Link>  /  <Link to='/AddFunction'>Add</Link>
        </div>
      </header>
      <div style={{paddingTop: '48px', textAlign: 'center'}}>
        <Route exact path='/' component={ButtonList} />
        <Route exact path='/index.html' component={ButtonList} />
        <Route path='/Setting' component={Setting} />
        <Route path='/AddFunction' component={AddFunction} />
      </div>
    </BrowserRouter>
  );
}

export default App;
