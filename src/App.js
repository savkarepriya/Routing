import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import User from './components/User';
import Info from './components/Info'
import Demo from './components/Demo'
import Contact from './components/Contact'
import About from './components/About'
import Felix from './components/Felix'
import PageNotFound from './components/PageNotFound';



function App() {

  return ( 
    <>
    <Menu />
    
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/user' component={User} />
      <Route path='/info' component={Info} />
      <Route path='/demo' component={Demo} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route path='/felix' component={Felix} />
      <Route component={PageNotFound} />
      </Switch>

    

    </>
  );
}

export default App;