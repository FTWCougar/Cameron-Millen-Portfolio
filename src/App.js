import React from 'react';
import './App.css';
import Header from './Header';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <div id="Home" className="App">
      <Header />
      <main>
        <About/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
