import React from 'react';
import logo from './logo.svg';
import Header from "../src/components/header/header";
import FirstMain from "../src/components/FirstMain/FirstMain";
import Footer from "../src/components/footer/footer";
import SeccionGorras from "./components/seccionGorras/seccionGorra";
import SeccionRemeras from "./components/seccionRemeras/seccionRemeras";
import SeccionMujeres from "./components/seccionMujeres/seccionMujeres";
import './App.css';


function App() {
  return (
    <div className="App bg-[#20433f] ">
      <Header />
      <FirstMain />
      <SeccionGorras />
      <SeccionRemeras />
      <SeccionMujeres />
      <Footer />
    </div>
  );
}

export default App;
