import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1 id="title">Mists</h1>
      <div className="hero">
        <h2>Power Your Allomancy</h2>
        <p>Mastercrafted, custom-made vials for all your allomantic needs.</p>
      </div>
      <div className="learn-more">
        <a href="#ImageGallery">
          <div>Learn more</div>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
