import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.jsx";
import ChatApp from "./components/Chat.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* Define more routes here */}
        <Route path="/chat" element={<ChatApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
