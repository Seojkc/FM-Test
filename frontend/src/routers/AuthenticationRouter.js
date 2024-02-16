import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Header from "../components/Header";

export default function AuthenticationRouter({ setIsLoggedIn, setUser,isLoggedIn }) {
  const [page, setPage] = useState("login");
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {page === "login" ? (
        <LoginPage
          setPage={setPage}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
        />
      ) : (
        <SignupPage
          setPage={setPage}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
        />
      )}
    </>
  );
}
