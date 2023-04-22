import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatgpt from "./components/ChatGPT/main.chatgpt";
import Dalle from "./components/Dall-E/main.dalle";
import MainLayouts from "./components/Layouts/main.layouts";
import { Sidebar } from "./components/Layouts/sidebar.layouts";
import Octocat from "./components/Utilities/octocat";
import Home from "./components/Home/main.home";
import FAQ from "./components/FAQ/main.faq";
import Demo from "./components/Demo/main.demo";

const App = () => {
  return (
    <MainLayouts>
      <BrowserRouter>
        <Octocat />
        <div className="flex">
          <Sidebar />
          <main className="p-7 flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    title="Just Ask Melo."
                    description="MAI personal AI."
                  />
                }
              />
              <Route
                path="/chatgpt"
                element={
                  <Chatgpt
                    title="MAI GPT"
                    description="Interacts with AI in a conversational way."
                  />
                }
              />
              <Route
                path="/dall-e"
                element={
                  <Dalle
                    title="inu·E"
                    description="Create original, realistic images and art from a text description"
                  />
                }
              />
              <Route path="/question" element={<FAQ />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
