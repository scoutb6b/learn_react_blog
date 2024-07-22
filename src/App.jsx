import React from "react";

import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import PostPage from "./components/PostPage";
import ContactPage from "./ContactPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
