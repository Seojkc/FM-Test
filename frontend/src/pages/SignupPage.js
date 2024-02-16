import React, { useState } from "react";
import './../cssFiles/login.css'

export default function SignupPage({ setPage, setIsLoggedIn, setUser }) {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!password || !firstname || !lastname || !email || !username) {
      setError("Fill the form entirely.");
      return false;
    } else if (password.length < 6) {
      setError("Password should be larger than 6 characters.");
      return false;
    }
    return true;
  };

  const signup = async () => {
    if (validate()) {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
          lastname,
          firstname,
        }),
      });
      const response = await res.json();
      if (res.ok) {
        setUser(response.data);
        setIsLoggedIn(true);
      } else {
        setError(response.message);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="form">
      <h2 className="heading-Login">Signup</h2>
      {error && (
        <div className="error form-error">
          <p className="error-text">{error}</p>
        </div>
      )}
      <div className="names-login-flex">
      <div style={{ marginTop: "30px" }}>
        <p className="input-label">Firstname:</p>
        <input
          className="input-login input"
          name="firstname"
          value={firstname}
          onInput={(e) => {
            setFirstname(e.target.value);
          }}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p className="input-label">Lastname:</p>
        <input
          className="input-login input"
          name="lastname"
          value={lastname}
          onInput={(e) => {
            setLastname(e.target.value);
          }}
        />
      </div>

      </div>
      <div className="names-login-flex">
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
      </div>
      
      <div style={{ marginTop: "30px" }}>
        <p className="input-label">Email:</p>
        <input
          className="input-login input"
          name="email"
          value={email}
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      
      <a
        disabled={isLoading}
        onClick={signup}
        className="form-button form-button-login"
      >
        {isLoading ? "Signing up In..." : "Signup"}
      </a>
      <p className="new-user-text">
        If you already have an account{" "}
        <span
          onClick={() => {
            setPage("login");
          }}
          style={{ color: "red", cursor: "pointer" }}
        >
          login here
        </span>
        .
      </p>
    </div>
  );
}
