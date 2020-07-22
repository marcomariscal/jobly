import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="pt-5">
          <div className="col-md-8 offset-md-2">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
