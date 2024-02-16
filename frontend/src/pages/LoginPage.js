import React, { useState } from "react";
import './../cssFiles/login.css'

export default function LoginPage({ setPage, setIsLoggedIn, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    return username && password;
  }; 

  
    
  
  const login = async () => {
    try {
    if (validate()) {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const response = await res.json();
      if (res.ok) {
        setUser(response.data);
        setIsLoggedIn(true);
      } else {
        setError(response.message);
      }
      setIsLoading(false);
    } else {
      setError("Username or Password are empty.");
    }
  } catch (error) 
  {
    setError("Something Went WRong");
  }
  };
  

  return (
    <div className="container">
      <div className="form">
        <h2 className="heading-Login">Login</h2>
        {error && (
          <div className="error form-error">
            <p className="error-text">{error}</p>
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
            type="password"
            value={password}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <a disabled={isLoading} onClick={login} className="form-button form-button-login">
          {isLoading ? "Logging In..." : "Login"}
        </a>
        <p className="new-user-text">
          If you don't have an account{" "}
          <span
            onClick={() => {
              setPage("signup");
            }}
            style={{ color: "red", cursor: "pointer" }}
          >
            click here
          </span>
          .
        </p>
      </div>

    </div>
    
  );
}
