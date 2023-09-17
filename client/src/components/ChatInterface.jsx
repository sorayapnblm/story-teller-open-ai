import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ChatInterface.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function ChatInterface() {
  const [input, setInput] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const { storyteller, storytellername, mainCharacterName, selectedPronouns, topic, selectedLanguage } = useParams();


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
    Present you first.
    At the end of the story, ask the user if they want to add a new part to the story. Continue the story with what the user added.
    Only speak in ${selectedLanguage}`;

  async function handleSubmit(e) {
    e.preventDefault();

    let chatLogNew = [...chatLog, { role: "user", content: `${input}` }];
    setInput("");
    setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.content).join("\n");

    setIsWaiting(true);

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

    setIsWaiting(false);

    setChatLog([...chatLogNew, { role: "assistant", content: data.message }]);


  }

  return (
    <>
      <div className="chat-interface" data-aos="fade-up" data-aos-duration="3000">
        <div className="chat-container">
          <div className="chatbox">
            <div className="waiting-message">
              Say hi and {storytellername} will answer you shortly. ♡
            </div>
            {chatLog.map((message, index) => (
              <div className="chat-message" key={index}>
                <div className={`message ${message.role}`}>
                  {index > 0 ? message.content : null}
                </div>
              </div>
            ))}
            {isWaiting && <div className="waiting-message">{storytellername} is typing ...</div>}

          </div>
          <div className="chat-input-holder">
            <form onSubmit={handleSubmit} className="formtest">
              <input
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chat-input-textarea"
                placeholder="Type your message here."
              />
            </form>
          </div>
        </div>
        <div class="chat-interface-copyright">
        Built and designed by Soraya Panambalom. <br />
        All right reserved. &copy;
      </div>
      </div>
    </>
  );
}

export default ChatInterface;