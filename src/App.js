import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Main/Home";
import Page2 from "./Main/Page2";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
};

export default App;
