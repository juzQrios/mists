import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [visible, setVisibility] = useState(false);
  const [msg, setMsgVisible] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    const form = document.querySelector("form.content");
    let complete = true;
    const firstName = form.querySelector("#first-name").value;
    const LastName = form.querySelector("#last-name").value;
    const email = form.querySelector("#email").value;
    const bio = form.querySelector("#bio").value;
    complete = complete && firstName && LastName && email && bio;
    setVisibility(false);
    complete ? setMsgVisible("Thank you!") : setMsgVisible("Form Incomplete!");
  };

  const popUp = (
    <div className="pop-up">
      <form className="content" onSubmit={(e) => formHandler(e)}>
        <input type="text" id="first-name" placeholder="First name" />
        <input type="text" id="last-name" placeholder="Last name" />
        <input type="email" id="email" placeholder="Email" />
        <input type="textarea" id="bio" placeholder="Bio" />
        <button>Submit</button>
      </form>
    </div>
  );

  const popOver = (
    <div className="pop-up">
      <div className="content">
        <div className="message">{msg}</div>
        <button onClick={() => setMsgVisible(false)}>Ok</button>
      </div>
    </div>
  );

  return (
    <div className="Contact">
      {msg ? popOver : null}
      {visible ? popUp : null}
      <button onClick={() => setVisibility(true)}>Contact Us</button>
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
