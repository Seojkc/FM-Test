import { useState } from "react";
import "./App.css";
import ApplicationRouter from "./routers/ApplicationRouter";
import AuthenticationRouter from "./routers/AuthenticationRouter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <div>
      {isLoggedIn ? (
        <ApplicationRouter setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUser={setUser} user={user} />
      ) : (
        <AuthenticationRouter setIsLoggedIn={setIsLoggedIn} setUser={setUser} isLoggedIn={isLoggedIn} />
      )}
    </div>
  );
}

export default App;
