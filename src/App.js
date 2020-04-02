import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Navigation/Dashboard';
import Pokemon from './Components/Pokemon/Pokemon';

import About from './Components/Pages/About/About';
import Compare from './Components/Pages/Compare/Compare';
import Random from './Components/Pages/Random/Random';
import Search from './Components/SearchBar/Search';


console.log('Application has started');

class App extends Component {

  render() {
    return (
      // <div>
      //   <LoginPage/>
      // </div>
      <Router>
        <div className="App">
          
          <Navigation />
          <div className="container">
            <Switch>
              {/*<Route exact path ="/home" component = {Home}/>*/}
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/about" component={About} />
              <Route exact path="/compare" component={Compare} />
              <Route exact path="/random" component={Random} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
       </Router>
     );
  }
}

export default App;