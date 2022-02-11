import React, { useContext } from 'react';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Modal from './components/Modal';
import Navigation from './components/Navigation';
import Newsletter from './components/Newsletter';
import SocialMedias from './components/SocialMedias';
import StateContext from './context/StateContext';
import './style.css';

function App() {
  const { isModalVisible } = useContext(StateContext);
  return (
    <div className="App">
      <Header />
      {isModalVisible && <Modal />}
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
