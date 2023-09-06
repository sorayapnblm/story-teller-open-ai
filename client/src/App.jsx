import "./App.css";
// import setState
import { useState } from "react";

function App() {

  // Add state for input and chat log
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can i help?"
    },
    {
      user: "me",
      message: "I want to use chatgpt"
    }
  ]);

  //clear function

  function clearChat() {
    setChatLog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, {user: "me", message: `${input}`}]
    setInput("");
    setChatLog(chatLogNew)


    //fetch response to the api combining the chat log array of messages and sending it as a message to localhost:3000 as a post
    const messages = chatLogNew.map((message) => message.message).
    join("\n")
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages,
        
      })
    })
    const data = await response.json();
    setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}`}])
    

  }
  return (
    <>
      <div className="test">
        <aside className="sidemenu">
          <div className="side-menu-button" onClick={clearChat}>
            <span>+ </span>
            New Chat
          </div>
        </aside>
        <section className="chatbox">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          <div className="chat-input-holder">
            <form onSubmit={handleSubmit}>
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
        </section>
      </div>
    </>
  );
}

const ChatMessage = ({message}) => {
  return(
    <div className="chat-message">
            <div className="message">
              {message.message}
              </div>
          </div>
  )
}

export default App;
