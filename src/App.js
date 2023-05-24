// import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Price from './components/Price/Price';

import './App.css';
import Works from './components/TypesOfWorks/Works';
import Reviews from './components/Reviews/Reviews';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Works/>
      <Price/>
      <Reviews/>
      <BeforeAfter/>
    </div>
  );
}

export default App;
