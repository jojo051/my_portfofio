import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';  
import Home from './components/Home';
import Contact from './components/Contact';
import Projets from './components/Projets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/projets" component={Projets} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
