import React, { useState } from "react";
import './../cssFiles/login.css'

export default function ChangePasswordPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    if (!password || !username || !newPassword) {
      setError("Fill the form entirely.");
      return false;
    } else if (newPassword.length < 6) {
      setError("New Password should be larger than 6 characters.");
      return false;
    }
    return true;
  };

  const changePassword = async () => {
    if (validate()) {
      setIsLoading(true);
      setError("");
      setMessage("");
      const res = await fetch("http://localhost:5000/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, newPassword }),
      });
      const response = await res.json();
      if (res.ok) {
        setMessage(response.message);
      } else {
        setError(response.message);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="form">
      <h2  className="heading-Login">Change Password</h2>
      {error && (
        <div className="error form-error">
          <p className="error-text">{error}</p>
        </div>
      )}
      {message && (
        <div className="message form-message">
          <p className="message-text">{message}</p>
        </div>
      )}
      <div style={{ marginTop: "30px" }}>
        <p className="input-label">Username:</p>
        <input
          className="input-login input"
          name="username"
          value={username}
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p className="input-label">Password:</p>
        <input
          className="input-login input"
          name="password"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p className="input-label">New Password:</p>
        <input
          className="input-login input"
          name="newPassword"
          value={newPassword}
          onInput={(e) => {
            setNewPassword(e.target.value);
          }}
        />
      </div>
      <a
        disabled={isLoading}
        onClick={changePassword}
        className="form-button form-button-login"
      >
        {isLoading ? "Chnaging Password In..." : "Change Password"}
      </a>
    </div>
  );
}
