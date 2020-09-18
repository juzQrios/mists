import React, { useState, useEffect } from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const [left, setLeft] = useState(0);
  const slide = (direction) => {
    const sliderElement = document.querySelector(".slider");
    if (direction === "right") {
      if (left === -400) {
        sliderElement.style.left = "0vw";
        setLeft(0);
      } else {
        sliderElement.style.left = `${left - 100}vw`;
        setLeft(left - 100);
      }
    } else if (direction === "left") {
      if (left === 0) {
        sliderElement.style.left = "-400vw";
        setLeft(-400);
      } else {
        sliderElement.style.left = `${left + 100}vw`;
        setLeft(left + 100);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => slide("right"), 5000);
    return () => clearInterval(timer);
  });

  return (
    <div className="ImageGallery" id="ImageGallery">
      <div className="controls">
        <div className="left-control" onClick={() => slide("left")}>
          <i className="fas fa-caret-left"></i>
        </div>
        <div className="right-control" onClick={() => slide("right")}>
          <i className="fas fa-caret-right"></i>
        </div>
      </div>
      <div className="frame">
        <div className="slider">
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2013/02/21/19/10/sea-84629_1280.jpg"
              alt="Cloudy Sea"
            ></img>
          </div>
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_1280.jpg"
              alt="Beach beverage"
            ></img>
          </div>
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2010/12/13/10/09/abstract-2384_1280.jpg"
              alt="Abstract waves"
            ></img>
          </div>
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2013/02/21/19/06/accessories-84528_1280.jpg"
              alt="Accessories beach"
            ></img>
          </div>
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_1280.jpg"
              alt="3"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
