import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [left, setLeft] = useState(0);
  const slide = (direction) => {
    const sliderElement = document.querySelector(".text-slider");
    if (direction === "right") {
      if (left === -200) {
        sliderElement.style.left = "0vw";
        setLeft(0);
      } else {
        sliderElement.style.left = `${left - 100}vw`;
        setLeft(left - 100);
      }
    } else if (direction === "left") {
      if (left === 0) {
        sliderElement.style.left = "-400vw";
        setLeft(-200);
      } else {
        sliderElement.style.left = `${left + 100}vw`;
        setLeft(left + 100);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => slide("right"), 6000);
    return () => clearInterval(timer);
  });

  return (
    <div className="About">
      <div className="text-controls">
        <div className="left-control" onClick={() => slide("left")}>
          <i className="fas fa-arrow-circle-left"></i>
        </div>
        <div className="right-control" onClick={() => slide("right")}>
          <i className="fas fa-arrow-circle-right"></i>
        </div>
      </div>
      <div className="frame">
        <div className="text-slider">
          <article className="slide">
            <h3>Premium Metals</h3>
            <p>
              We use only the purest of metals mined from selected few ores and
              refined using best in class tech and methods.
            </p>
          </article>
          <article className="slide">
            <h3>Secure Shipping</h3>
            <p>
              We never disclose customer or shipping details. All vials are
              shipped safe and secure free of spy eyes. We also offer free
              returns if you are not satisified.
            </p>
          </article>
          <article className="slide">
            <h3>Quality Assurance</h3>
            <p>
              Expect pure metals and alloys, all your purchases are custom-made
              for your needs and tested for any impurities.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
