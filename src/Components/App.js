import React from "react";
import Welcome from "./Welcome/Welcome";
import ImageGallery from "./ImageGallery/ImageGallery";
import About from "./About/About";
import Contact from "./Contact/Contact";
import "normalize.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Welcome />
      <ImageGallery />
      <About />
      <Contact />
    </div>
  );
}
