import React, { useState } from 'react';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Modal from './components/Modal';
import Navigation from './components/Navigation';
import Newsletter from './components/Newsletter';
import SocialMedias from './components/SocialMedias';
import './style.css';

function App() {
  const [isModalHeaderVisible, setIsModalHeaderVisible] = useState(false);
  const [searchBarHeader, setSearchBarHeader] = useState('');

  return (
    <div className="App">
      <Header
        setIsModalHeaderVisible={setIsModalHeaderVisible}
        setSearchBarHeader={setSearchBarHeader}
      />
      {isModalHeaderVisible && (
      <Modal
        onClick={() => setIsModalHeaderVisible(false)}
      >
        <h1>{`Você pesquisou, ${searchBarHeader}...`}</h1>
      </Modal>
      )}
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
