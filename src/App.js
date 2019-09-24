import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Proyects from './components/Proyects/Proyects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Proyects/>
      <Footer/>
    </div>
  );
}

export default App;
