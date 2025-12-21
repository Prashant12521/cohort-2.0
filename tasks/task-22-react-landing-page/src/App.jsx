import React from 'react'
import Nav from "./components/Nav/Nav";
import "./App.css"
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Features from './components/Features/Features';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <About />
      <Features />
      <Stats />
      <Services />
    </div>
  )
}

export default App