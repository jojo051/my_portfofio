import React from 'react';
import './App.css';   
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Home />*/}
        <Contact />
      </header>
    </div>
  );
}

export default App;
