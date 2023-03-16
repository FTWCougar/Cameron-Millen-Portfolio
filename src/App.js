import React from 'react';
import './App.css';
import Header from './Header';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
