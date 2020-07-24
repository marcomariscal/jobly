import React, { useState } from "react";
import LoginForm from "./LoginForm";
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";

const Login = ({ tokenToStorage }) => {
  const history = useHistory();
  const [messages, setMessages] = useState({ messages: [] });
  const [invalidAuth, setInValidAuth] = useState(false);

  // log the user in and get a token
  const handleLogin = async (data) => {
    try {
      const { token } = await JoblyApi.loginUser(data);
      tokenToStorage(token);
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
      tokenToStorage(token);
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
