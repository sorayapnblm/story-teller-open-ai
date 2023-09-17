import React from "react";
import "../styles/WelcomePage.css";
import soraya from "../assets/Untitled_Artwork 2.png";
import bubble from "../assets/Untitled_Artwork 4.png";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function WelcomePage() {
  return (
    <div className="welcome-page" data-aos="fade-down" data-aos-duration="3000">
      <div className="welcome-intro">
        <h1>
          Oh hi! It's me Soraya! <br />
          Welcome on "Tell me a story".
          <br />
          In this game you will be able to generate thanks to artificial
          intelligence your own personalised stories.
          <br />
          This game is ideal for kids when it comes to tell a story before
          sleeping, I hope you will enjoy it! <br />
          Goodnight!
        </h1>
      </div>
      <div className="welcome-image-container-bubble">
        <img src={bubble} className="bubble-image" />
      </div>
      <div className="welcome-image-container-soraya">
        <img src={soraya} className="soraya-image" />
      </div>
      <Link to="/register" className="welcome-page-start-button">
          Start
        </Link>
    </div>
  );
}

export default WelcomePage;
