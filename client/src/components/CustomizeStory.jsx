import React, { useState } from "react";
import "../styles/CustomizeStory.css";

const CustomizeStory = () => {

  const [mainCharacterName, setMainCharacterName] = useState("");
  const [topic, setTopic] = useState("");

  const handleMainCharacterName = (e) => {
    setMainCharacterName(e.target.value);
  };

    const handleTopic = (e) => {
      setMainCharacterName(e.target.value);
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
          onChange={handleMainCharacterName}
          placeholder="Enter main character name"
        />
        </div>

        <div className="customize-story-inputs-gender">
        Choose your main character gender:
          <ul>
            <li><button>Female</button></li>
            <li><button>Male</button></li>
            <li><button>Non-binary</button></li>
          </ul>
        </div>

        <div className="customize-story-inputs-topic">
        Choose your topic:
        <input
          type="text"
          value={topic}
          onChange={handleTopic}
          placeholder="Enter topic"
        />
        </div>

        <div className="customize-story-inputs-chapter">
          Choose your chapter number:
          <ul>
            <li><button>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
            <li><button>6</button></li>
            <li><button>7</button></li>
            <li><button>8</button></li>
            <li><button>9</button></li>
            <li><button>10</button></li>
          </ul>
        </div>

        <div className="customize-story-inputs-language">
          Choose your language:
          <ul>
            <li><button>English</button></li>
            <li><button>French</button></li>
            <li><button>Spanish</button></li>
            <li><button>Korean</button></li>
            <li><button>Hindi</button></li>
            <li><button>Arabic</button></li>
            <li><button>Russian</button></li>
            <li><button>Portuguese</button></li>
            <li><button>Indonesian</button></li>
            <li><button>Chinese</button></li>
          </ul>
        </div>



      </div>
    </div>
  );
};

export default CustomizeStory;
