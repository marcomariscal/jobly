import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import useLocalStorageState from "./hooks/useLocalStorageState";

import Routes from "./Routes";
import Navigation from "./Navigation";
import { Spinner } from "reactstrap";
import JoblyApi from "./JoblyApi";

function App() {
  const [currentUser, setCurrentUser] = useState({ currentUser: {} });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return window.localStorage.getItem("token");
  });
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [token, setToken] = useLocalStorageState("token", "");

  const tokenToStorage = (token) => {
    setToken(token);
    if (token) {
      setIsLoggedIn(true);
    }
  };

  // useEffect(() => {
  //   async function getCurrentUser(username) {
  //     const res = await JoblyApi.getUser(username);
  //     setCurrentUser(res);
  //   }
  //   // getCurrentUser("marcomariscal");
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} />
        <div className="pt-5">
          <Routes tokenToStorage={tokenToStorage} isLoggedIn={isLoggedIn} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
