import React from "react";
import './../cssFiles/NavBar.css'

export default function Header({
  isLoggedIn,
  setPage,
  setUser,
  setIsLoggedIn,
}) {
  return (
    <div className="containerNav" >
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ color: "#f6f6f6" }}>Best Shop</h2>
        {isLoggedIn && (
          <div>
            <ul>
              <li className="navbar-item" onClick={() => setPage("products")}>Home</li>
              <li  className="navbar-item" onClick={() => setPage("admin")}>Admin</li>
              <div className="dropdown">
                <li className="navbar-item" >Users</li>
                <div class="dropdown-list">
                  <p onClick={() => setPage("profile")}>Profile</p>
                  <p
                    onClick={() => {
                      setUser(null);
                      setIsLoggedIn(false);
                    }}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
