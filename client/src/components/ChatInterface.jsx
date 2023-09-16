import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ChatInterface.css";

function ChatInterface() {
  const [input, setInput] = useState("");
  const { storyteller, storytellername, mainCharacterName, selectedPronouns, topic, selectedChapter, selectedLanguage } = useParams();

  const [chatLog, setChatLog] = useState([
    {
      role: "user",
      content: `Tell me a story about a main character named ${mainCharacterName}.
      For the main character use the pronouns ${selectedPronouns}.
      The main topic of the story is ${topic}.`,
    },
  ]);

  const systemMessage = `Talk like a ${storyteller}.
    Your name is ${storytellername}.
    You are a storyteller.
    At the end of the story ask to the user if they want to add a new part to the story. Continue the story with what the user added.`;

  async function handleSubmit(e) {
    e.preventDefault();

    let chatLogNew = [...chatLog, { role: "user", content: `${input}` }];
    setInput("");
    setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.content).join("\n");

    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemMessage: systemMessage,
        message: messages,
      }),
    });

    const data = await response.json();

    // Modify the addLineBreaks function to return an array of paragraphs

    setChatLog([...chatLogNew, { role: "assistant", content: data.message }]);
  }

  return (
    <>
      <div className="chat-interface">
        <div className="chat-container">
          <div className="chatbox">
            {chatLog.map((message, index) => (
              <div className="chat-message" key={index}>
                <div className={`message ${message.role}`}>
                  {/* Render the content directly, but skip rendering for the first message */}
                  {index > 0 ? message.content : null}
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
