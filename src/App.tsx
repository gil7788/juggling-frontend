import React, { useState } from "react";
import './index.css';
import Pattern from "./components/Pattern";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Footer from "./components/Footer";
import DestinationCards from "./components/DestinationCards";
import Hero from "./components/Hero";

export default function App() {
  const [searchedPattern, setSearchedPattern] = useState("");

  const handleSearch = (pattern:string) => {
    setSearchedPattern(pattern);
  };

  return (
    <>
      <div>
        <NavigationBar />
        <div className="container mx-auto">
          <div id="hero">
            <Hero onSearch={handleSearch} />
          </div>
          <div id="pattern">
            <Pattern searchedPattern={searchedPattern} />
          </div>
          <div id="about">
            <About />
          </div>
        </div>
        <Footer />
      </div>
    </>    
  );
}
