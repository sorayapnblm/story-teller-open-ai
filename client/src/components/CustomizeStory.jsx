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
  const [selectedChapter, setSelectedChapter] = useState("");
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

  // Handle chapter selection
  const handleChapterChange = (chapter) => {
    setSelectedChapter(chapter);
  };

  // Handle language selection
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="customize-story">
      <div className="customize-story-intro">
        Let's first customize your story!
      </div>
      <div className="customize-story-inputs">
        <div className="customize-story-inputs-maincharacter">
          Choose your main character name:
          <input
            type="text"
            value={mainCharacterName}
            onChange={handleMainCharacterNameChange}
            placeholder="Enter main character name"
          />
        </div>

        <div className="customize-story-inputs-gender">
          Choose your main character gender:
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
          Choose your topic:
          <input
            type="text"
            value={topic}
            onChange={handleTopicChange}
            placeholder="Enter topic"
          />
        </div>

        <div className="customize-story-inputs-chapter">
          Choose your chapter number:
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((chapter) => (
              <li key={chapter}>
                <button onClick={() => handleChapterChange(chapter)}>
                  {chapter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="customize-story-inputs-language">
          Choose your language:
          <ul>
            {[
              "English",
              "French",
              "Spanish",
              "Korean",
              "Hindi",
              "Arabic",
              "Russian",
              "Portuguese",
              "Indonesian",
              "Chinese",
            ].map((language) => (
              <li key={language}>
                <button onClick={() => handleLanguageChange(language)}>
                  {language}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Link to navigate to ChatInterface and pass selected options as state */}
        <Link to={`/chat/${storyteller}/${storytellername}/${mainCharacterName}/${selectedPronouns}/${topic}/${selectedChapter}/${selectedLanguage}`}>
          Start Chat
        </Link>
      </div>
    </div>
  );
};

export default CustomizeStory;
