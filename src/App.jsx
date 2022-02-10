import React from 'react';
import Carrousel from './components/Carrousel';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Navigation from './components/Navigation';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Carrousel />
      <Highlights />
    </div>
  );
}

export default App;
