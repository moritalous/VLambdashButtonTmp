import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ButtonList from './components/ButtonList'
import Setting from  './components/Setting'
import AddFunction from './components/AddFunction'

function App() {
  return(
    <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Setting'>Setting</Link></li>
        <li><Link to='/AddFunction'>AddFunction</Link></li>
      </ul>

      <hr></hr>

      <Route exact path='/' component={ButtonList} />
      <Route path='/Setting' component={Setting} />
      <Route path='/AddFunction' component={AddFunction} />

      <Route></Route>

    </div>
    </BrowserRouter>
  );
}

export default App;
