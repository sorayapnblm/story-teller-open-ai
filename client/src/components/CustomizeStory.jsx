import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/CustomizeStory.css";
import { useParams } from "react-router-dom";

const CustomizeStory = () => {

  // Get the character's name from the URL
  const { storyteller, storytellername} = useParams();

  // Create state variables to store user selections
  const [mainCharacterName, setMainCharacterName] = useState("");
  const [selectedPronouns, setSelectedPronouns] = useState("");
  const [topic, setTopic] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Handle changes in the main character name input field
  const handleMainCharacterNameChange = (e) => {
    setMainCharacterName(e.target.value);
  };

  // Handle pronouns selection
  const handlePronounsChange = (pronouns) => {
    setSelectedPronouns(pronouns);
  };

  // Handle changes in the topic input field
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  // Handle language selection
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="customize-story">
      <div className="customize-story-intro">
        Let's first customize your story.
      </div>
      <div className="customize-story-inputs">
        <div className="customize-story-inputs-maincharacter">
          <h2>
          Choose your main character name:
          </h2>
          <input
            type="text"
            value={mainCharacterName}
            onChange={handleMainCharacterNameChange}
            placeholder="Enter main character name"
          />
        </div>

        <div className="customize-story-inputs-pronouns">
          <h2>
          Choose your main character gender:
          </h2>
          <ul>
            <li>
              <button onClick={() => handlePronounsChange("She her hers")}>
              She her hers
              </button>
            </li>
            <li>
              <button onClick={() => handlePronounsChange("He him his")}>He him his</button>
            </li>
            <li>
              <button onClick={() => handlePronounsChange("They them their")}>
              They them their
              </button>
            </li>
          </ul>
        </div>

        <div className="customize-story-inputs-topic">
          <h2>
          Choose your topic:
          </h2>
          <input
            type="text"
            value={topic}
            onChange={handleTopicChange}
            placeholder="Enter topic"
          />
        </div>

        <div className="customize-story-inputs-language">
          <h2>
          Choose your language:
          </h2>
          <ul>
            {[
              "English",
              "French",
              "Spanish",
              "Korean",
              "Hindi"
            ].map((language) => (
              <li key={language}>
                <button onClick={() => handleLanguageChange(language)}>
                  {language}
                </button>
              </li>
            ))}
          </ul>
          <ul>
            {[
              "Arabic",
              "Russian",
              "Portuguese",
              "Indonesian",
              "Chinese"
            ].map((language) => (
              <li key={language}>
                <button onClick={() => handleLanguageChange(language)}>
                  {language}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="customize-story-link-container">
        <Link to={`/chat/${storyteller}/${storytellername}/${mainCharacterName}/${selectedPronouns}/${topic}/${selectedLanguage}`} 
        className="customize-story-link">
          Start
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomizeStory;
