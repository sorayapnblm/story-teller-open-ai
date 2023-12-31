import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import ChatInterface from "./components/ChatInterface.jsx";
import StoryTellerChoice from "./components/StoryTellerChoice.jsx";
import CustomizeStory from "./components/CustomizeStory.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/storytellerchoice" element={<StoryTellerChoice/>} />
        <Route path="/customize/:storyteller/:storytellername" element={<CustomizeStory/>} />
        <Route path="/chat/:storyteller/:storytellername/:mainCharacterName/:selectedGender/:topic/:selectedLanguage" element={<ChatInterface/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
