import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import GetStart from "./components/GetStarted/GetStart";
import Footer from "./components/Footer/Footer"

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Values />
      <Contact/>
      <GetStart/>
      <Footer/>
    </div>
  );
}
