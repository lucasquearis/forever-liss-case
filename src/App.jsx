import React, { useContext } from 'react';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Modal from './components/Modal';
import Navigation from './components/Navigation';
import NavigationHamburguer from './components/NavigationHamburguer';
import Newsletter from './components/Newsletter';
import SocialMedias from './components/SocialMedias';
import StateContext from './context/StateContext';
import './style.css';

function App() {
  const { isModalVisible, hamburguerOpen } = useContext(StateContext);
  return (
    <div className="App">
      {isModalVisible && <Modal />}
      {hamburguerOpen && <NavigationHamburguer />}
      <Header />
      <Navigation />
      <Carrousel />
      <Highlights />
      <Highlights />
      <Newsletter />
      <SocialMedias />
      <Footer />
    </div>
  );
}

export default App;
