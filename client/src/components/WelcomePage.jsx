import React from "react";
import "../styles/WelcomePage.css";
import soraya from "../assets/soraya.png";
import bubble from "../assets/bubble.png";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function WelcomePage() {
  return (
    <div className="welcome-page" data-aos="fade-down" data-aos-duration="3000">
      <div className="welcome-intro">
        <h1>
          Oh hi! It's me Soraya! <br />
          Welcome on "Tell me a story AI".
          <br />
          In this game you will be able to generate thanks to artificial
          intelligence your own personalised stories. <br />
          You will meet Luna, Scarlet and Seraphina, they are storry tellers !
          <br />
          This game is ideal if you need a story before sleep, I hope you will
          enjoy it! <br />
          Goodnight!
        </h1>
      </div>
      <div className="welcome-image-container-bubble">
        <img src={bubble} className="bubble-image" />
      </div>
      <div className="welcome-image-container-soraya">
        <img src={soraya} className="soraya-image" />
      </div>
      <div className="welcome-page-start-button-container">
        <Link to="/register" className="welcome-page-start-button">
          Start
        </Link>
      </div>
      <div class="welcome-page-copyright">
        Built and designed by Soraya Panambalom. <br />
        All right reserved. &copy;
      </div>
    </div>
  );
}

export default WelcomePage;
