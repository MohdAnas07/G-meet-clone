import React, { useState } from 'react';
import './App.css';
import Index from './components/Index';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {

  const [userName, setUserName] = useState('LazyPanda')
  const user = { userName, setUserName }

  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  >
            <Home {...user} />
          </Route>
          <Route path="/video" >
            <Index {...user} />
          </Route>
        </Switch>
      </Router>
    </div >

  );
}

export default App;