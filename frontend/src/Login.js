import React, { useState } from "react";
import LoginForm from "./LoginForm";
import JoblyApi from "./JoblyApi";
import useLocalStorageState from "./hooks/useLocalStorageState";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [messages, setMessages] = useState({ messages: [] });
  const [token, setToken] = useLocalStorageState("token", "");
  const [invalidAuth, setInValidAuth] = useState(false);

  // log the user in and get a token
  const handleLogin = async (data) => {
    try {
      const { token } = await JoblyApi.loginUser(data);
      setToken(token);
      history.push("/");
    } catch (e) {
      setInValidAuth(true);
      setMessages({ messages: e });
    }
  };

  // register the user in and get a token
  const handleRegister = async (data) => {
    try {
      const { token } = await JoblyApi.registerUser(data);
      setToken(token);
      history.push("/");
    } catch (e) {
      setInValidAuth(true);
      setMessages({ messages: e });
    }
  };

  return (
    <LoginForm
      login={handleLogin}
      register={handleRegister}
      invalidAuth={invalidAuth}
      messages={messages.messages}
    />
  );
};

export default Login;
