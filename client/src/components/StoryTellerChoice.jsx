import React from 'react';
import { Link } from 'react-router-dom';

const StoryTellerChoice = () => {
  return (
    <div className='story-teller-choice'>
      <div className='story-teller-choice'>
        Choose your story teller
      </div>
      <div className='story-teller-choice-list'>
        <ul>
          <li>
            <Link to="/customize/fairy/Luna Dandelion">Fairy</Link>
          </li>
          <li>
            <Link to="/customize/pirate/Captain Jack">Pirate</Link>
          </li>
          <li>
            <Link to="/customize/witch/Seraphina Moonshadow">Witch</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StoryTellerChoice;
