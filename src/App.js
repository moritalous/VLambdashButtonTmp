import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ButtonList from './components/ButtonList'
import Setting from './components/Setting'
import AddFunction from './components/AddFunction'

function App() {
  return (
    <BrowserRouter basename='/VLambdashButtonTmp'>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Link to='/'>Home</Link> /
        <Link to='/Setting'>Setting</Link> /
        <Link to='/AddFunction'>Add</Link>

        <hr></hr>

        <Route exact path='/' component={ButtonList} />
        <Route path='/Setting' component={Setting} />
        <Route path='/AddFunction' component={AddFunction} />

      </div>
    </BrowserRouter>
  );
}

export default App;
