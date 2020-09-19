import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <button>Contact Us</button>
      <section className="social">
        <header>Keep in touch</header>
        <div className="social-links">
          <a
            id="facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            id="insta"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            id="youtube"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
