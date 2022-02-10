import React from 'react';
import Carrousel from './components/Carrousel';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Navigation from './components/Navigation';
import Newsletter from './components/Newsletter';
import SocialMedias from './components/SocialMedias';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Carrousel />
      <Highlights />
      <Highlights />
      <Newsletter />
      <SocialMedias />
    </div>
  );
}

export default App;
