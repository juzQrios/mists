import React from "react";
import Welcome from "./Welcome/Welcome";
import ImageGallery from "./ImageGallery/ImageGallery";
import "normalize.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Welcome />
      <ImageGallery />
    </div>
  );
}
