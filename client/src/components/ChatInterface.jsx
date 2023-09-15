import "../styles/ChatInterface.css";
// import setState
import { useState } from "react";
import { useParams } from "react-router-dom";


function ChatInterface() {

  // Add state for input and chat log
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
  ]);
  

   // Get the character's name from the URL
   const { param1, param2 } = useParams();

   const systemMessage = `Talk like a ${param1}. Your name is ${param2}. Speak in French. You are a story teller, wait for the the user input before telling a story.`;
  

  async function handleSubmit(e) {

    // Prevent the default form submission behavior, which would reload the page
    e.preventDefault();

    // Create a new chat message object with the user's input and add it to the chat log
    let chatLogNew = [...chatLog, {"role": "user", "content": `${input}`}]

    // Clear the input field by setting it to an empty string
    setInput("");

    // Update the chat log state with the new message
    setChatLog(chatLogNew)


    //fetch response to the api combining the chat log array of messages and sending it as a message to localhost:3000 as a post
    
    // Combine all chat messages into a single string with line breaks
    const messages = chatLogNew.map((message) => message.content).join("\n")

    // Send a POST request to a server (http://localhost:3080/)
    const response = await fetch("http://localhost:3080/", {
      method: "POST", // Use the HTTP POST method to send data to the server
      headers: {
        "Content-Type": "application/json" // Specify that the request body is in JSON format
      },
      body: JSON.stringify({
        systemMessage: systemMessage,
        message: messages, // Send the combined chat messages as JSON data
      })
    })
    const data = await response.json();
    setChatLog([...chatLogNew, { "role": "assistant", "content": `${data.message}`}])
  }
  return (
    <>
    <div className="chat-interface">
      <div className="chat-container">
        <div className="chatbox">
          {chatLog.map((message, index) => (
            <div className="chat-message">
            <div className="message">
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
              onChange={(e)=> setInput(e.target.value)}
              className="chat-input-textarea"
              placeholder="Type yourmessage here"
            >
            </input>
             </form>
          </div>
      </div>
      </div>
    </>
  );
}

export default ChatInterface;
