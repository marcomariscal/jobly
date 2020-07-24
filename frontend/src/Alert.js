import React from "react";

const Alert = ({ type, messages }) => {
  return (
    <div className={`alert alert-${type} fade show`} role="alert">
      {messages.map((m) => (
        <p key={m} className="my-1 small">
          {m}
        </p>
      ))}
    </div>
  );
};

export default Alert;
