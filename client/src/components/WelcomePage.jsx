import React from "react";
import "../styles/WelcomePage.css"
import  test from "../assets/Untitled_Artwork 2.png"
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-intro">
        <h1>
          Hi it's me Soraya <br />
          Welcome on "Tell me a story"<br />
          You will be able to create your own story with an artficial intelligence. <br />
          In this game, you will be able to choose your story-tellerg
        </h1>
        <Link to="/chat" className="start-button">
          Start Chat
        </Link>
      </div>
      <div className="welcome-image-container">
      <img src={test} className="welcome-image"/>
      </div>
    </div>
  );
}

export default WelcomePage;