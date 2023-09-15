import React from "react";
import "../styles/ChatInterface.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ChatInterface() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const { storyteller, storytellername, mainCharacterName, selectedGender, topic, selectedChapter, selectedLanguage } = useParams();

  const systemMessage = `Talk like a ${storyteller}.
    Your name is ${storytellername}.
    You are a storyteller.
    Speak in ${selectedLanguage}.
    Tell a story about a main character named ${mainCharacterName}, 
    the main topic of the story is about ${topic},
    the story has ${selectedChapter} chapters.
    Wait for the user input before the story.`;

  async function handleSubmit(e) {
    e.preventDefault();

    let chatLogNew = [...chatLog, { "role": "user", "content": `${input}` }];
    setInput("");
    setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.content).join("\n");

    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemMessage: systemMessage,
        message: messages,
      })
    });

    const data = await response.json();

    // Modify the addLineBreaks function to return an array of paragraphs
    const addLineBreaks = (text) => {
      return text.split("\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));
    };

    setChatLog([...chatLogNew, { "role": "assistant", "content": addLineBreaks(data.message) }]);
  }

  return (
    <>
      <div className="chat-interface">
        <div className="chat-container">
          <div className="chatbox">
            {chatLog.map((message, index) => (
              <div className="chat-message" key={index}>
                <div className={`message ${message.role}`}>
                  {/* Render the content directly */}
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input-holder">
            <form onSubmit={handleSubmit} className="formtest">
              <input
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chat-input-textarea"
                placeholder="Type your message here"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatInterface;
