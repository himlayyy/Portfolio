import {useState} from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import {projects} from "./data";

import './App.css'


function App() {
  

  return (
    <div className="App mx-5">
      <Header />
      <div className="flex flex-col m-0 justify-center content-center max-w-5xl m-auto">
        <Hero />
        <Portfolio />
        <Experience />
        <Contact />
        
      </div>
    </div>
  )
}

export default App