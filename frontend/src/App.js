import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
