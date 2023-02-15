import React from 'react';
import logo from './logo.svg';
import Header from "../src/components/header/header";
import FirstMain from "../src/components/FirstMain/FirstMain";
import Footer from "../src/components/footer/footer";
import Seccion from "../src/components/seccion/seccion";


import './App.css';


function App() {
  return (
    <div className="App bg-[#20433f] ">
      <Header />
      <FirstMain />
      <Seccion />
      <Footer />
    </div>
  );
}

export default App;
