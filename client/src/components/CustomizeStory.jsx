import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/CustomizeStory.css";
import { useParams } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CustomizeStory = () => {
  // Get the character's name from the URL
  const { storyteller, storytellername } = useParams();

  // Create state variables to store user selections
  const [mainCharacterName, setMainCharacterName] = useState("");
  const [selectedPronouns, setSelectedPronouns] = useState(null);
  const [topic, setTopic] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);

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

  // Create state variables to track the input values and styles
  // const [mainCharacterName, setMainCharacterName] = useState("");
  const [characterNameInputStyle, setCharacterNameInputStyle] = useState({});
  // const [topic, setTopic] = useState("");
  const [topicInputStyle, setTopicInputStyle] = useState({});

  // Handle the Enter key press event for the character name input
  const handleCharacterNameEnterKeyUp = (e) => {
    if (e.key === "Enter") {
      // Change the character name input style when Enter is pressed
      setCharacterNameInputStyle({
        backgroundColor: "#1a1c2d",
        color: "aliceblue",
        fontWeight: "bold",
      });
    }
  };

  // Handle the Enter key press event for the topic input
  const handleTopicEnterKeyUp = (e) => {
    if (e.key === "Enter") {
      // Change the topic input style when Enter is pressed
      setTopicInputStyle({
        backgroundColor: "#1a1c2d",
        color: "aliceblue",
        fontWeight: "bold",
      });
    }
  };


  return (
    <div className="customize-story">
      <div className="customize-story-intro" data-aos="fade-down" data-aos-duration="3000">
        Let's first customize your story.
      </div>
      <div className="customize-story-inputs" data-aos="fade-up" data-aos-duration="3000">
        <div className="customize-story-inputs-maincharacter">
          <h2>Choose your main character name:</h2>
          <input
          type="text"
          value={mainCharacterName}
          onChange={(e) => setMainCharacterName(e.target.value)}
          placeholder="Enter main character name"
          onKeyUp={handleCharacterNameEnterKeyUp}
          style={characterNameInputStyle}
        />
        </div>

        <div className="customize-story-inputs-pronouns">
          <h2>Choose your main character gender:</h2>
          <ul>
            <li>
              <button
                onClick={() => handlePronounsChange("She her hers")}
                className={
                  selectedPronouns === "She her hers" ? "selected-button" : ""
                }
              >
                She her hers
              </button>
            </li>
            <li>
            <button
                onClick={() => handlePronounsChange("He him his")}
                className={
                  selectedPronouns === "He him his" ? "selected-button" : ""
                }
              >
                He him his
              </button>
            </li>
            <li>
            <button
                onClick={() => handlePronounsChange("They them their")}
                className={
                  selectedPronouns === "They them their" ? "selected-button" : ""
                }
              >
                They them their
              </button>
            </li>
          </ul>
        </div>

        <div className="customize-story-inputs-topic">
          <h2>Choose your topic:</h2>
          <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic"
          onKeyUp={handleTopicEnterKeyUp}
          style={topicInputStyle}
        />
        </div>

        <div className="customize-story-inputs-language">
          <h2>Choose your language:</h2>
          <ul>
            {["English", "French", "Spanish", "Korean", "Hindi"].map(
              (language) => (
                <li key={language}>
                  <button onClick={() => handleLanguageChange(language)}
                className={
                  selectedLanguage === language ? "selected-button" : ""
                }>
                    {language}
                  </button>
                </li>
              )
            )}
          </ul>
          <ul>
            {["Arabic", "Russian", "Portuguese", "Indonesian", "Chinese"].map(
              (language) => (
                <li key={language}>
                  <button onClick={() => handleLanguageChange(language)}
                className={
                  selectedLanguage === language ? "selected-button" : ""
                }>
                    {language}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="customize-story-link-container">
          <Link
            to={`/chat/${storyteller}/${storytellername}/${mainCharacterName}/${selectedPronouns}/${topic}/${selectedLanguage}`}
            className="customize-story-link"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomizeStory;
