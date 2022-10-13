import React from 'react';
import './App.css';
import Header from './components/Header';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import AddMobile from './components/AddMobile';
import AboutUs from './components/AboutUs';
import Mobiles from './components/Mobile/Mobiles';
import MobileDetail from './components/Mobile/MobileDetail';
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<AddMobile />} exact />
          <Route path='/mobiles' element={<Mobiles />} exact />
          <Route path='/about' element={<AboutUs />} exact />
          <Route path='/mobile/:id' element={<MobileDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
