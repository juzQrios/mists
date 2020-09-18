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
        <div>Learn more</div>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Welcome;
