import React from 'react';
import Carrousel from './components/Carrousel';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Carrousel />
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
