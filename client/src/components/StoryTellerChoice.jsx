/*
 * Copyright © 2023 Soraya PANAMBALOM
 */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoryTellerChoice.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const StoryTellerChoice = () => {
  return (
    <div className="story-teller-choice">
      <div
        className="story-teller-title"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Choose your storyteller.
      </div>
      <div
        className="story-teller-choice-list"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <ul>
          <li>
            <Link to="/customize/fairy/Luna Dandelion" className="bubble-link">
              Luna Dandelion
              <br />
              the fairy.
            </Link>
          </li>
          <li>
            <Link
              to="/customize/pirate/Captain Scarlet"
              className="bubble-link"
            >
              Captain Scarlet
              <br />
              the pirate.
            </Link>
          </li>
          <li>
            <Link
              to="/customize/witch/Seraphina Moonshadow"
              className="bubble-link"
            >
              Seraphina Moonshadow
              <br />
              the witch.
            </Link>
          </li>
        </ul>
      </div>
      <div class="story-teller-choice-copyright">
        Built and designed by Soraya Panambalom. <br />
        All right reserved. &copy;
      </div>
    </div>
  );
};

export default StoryTellerChoice;
