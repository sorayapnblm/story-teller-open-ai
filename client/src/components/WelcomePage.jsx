import React from "react";
import "../styles/WelcomePage.css"
import  test from "../assets/Untitled_Artwork 2.png"
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-intro">
        <h1>
          Oh hi! It's me Soraya! <br />
          Welcome on "Tell me a story".<br />
          In this game you will be able to generate thanks to artificial intelligence your own personalised stories.<br />
          This game is ideal for kids when it comes to tell a story before sleeping, I hope you will enjoy it! <br />
          Goodnight!
        </h1>
      </div>
      {/* <Link to="/register" className="start-button">
          Start
        </Link> */}
      <div className="welcome-image-container">
      <img src={test} className="welcome-image"/>
      </div>
    </div>
  );
}

export default WelcomePage;