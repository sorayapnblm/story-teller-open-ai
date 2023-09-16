import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StoryTellerChoice.css'; // Create a separate CSS file for styling

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const StoryTellerChoice = () => {
  return (
    <div className='story-teller-choice'>
      <div className='story-teller-title' data-aos="fade-down" data-aos-duration="3000">
        Choose your storyteller.
      </div>
      <div className='story-teller-choice-list' data-aos="fade-up" data-aos-duration="3000">
        <ul>
          <li>
            <Link to="/customize/fairy/Luna Dandelion" className="bubble-link">Fairy</Link>
          </li>
          <li>
            <Link to="/customize/pirate/Captain Jack" className="bubble-link">Pirate</Link>
          </li>
          <li>
            <Link to="/customize/witch/Seraphina Moonshadow" className="bubble-link">Witch</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StoryTellerChoice;

