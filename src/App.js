import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import QuienSoy from "./components/Quien-soy/Quien-soy";
import QueHago from "./components/Que-hago/Que-hago";
import SkillsCloud from "./components/Skills-cloud/Skills-cloud";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <QuienSoy />
      <QueHago />
      <SkillsCloud />
      <Contact />
    </div>
  );
}

export default App;
