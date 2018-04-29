import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Play from './Play'
import Submit from './Submit'
import Menu from './Menu'


const App = () => (
  <div className='app'>
    <Router>
      <div className='container'>
      <Route exact path='/' component={Menu}/>
      <Route exact path='/submit' component={Submit}/>
      <Route exact path='/play' component={Play}/>
      </div>
    </Router>
  </div>
)

export default App
