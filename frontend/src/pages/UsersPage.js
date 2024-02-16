import React, { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeletingUser, setIsDeletingUser] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const deleteUser = async (id) => {
    setIsDeletingUser(true);
    const res = await fetch("http://localhost:5000/user/" + id, {
      method: "DELETE",
    });
    const response = await res.json();
    if (res.ok) {
      setMessage(response.message);
      setUsers(users.filter((user) => user.id !== id));
    } else {
      setError(response.message);
    }
    setIsDeletingUser(false);
  };

  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const response = await res.json();
    setUsers(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {isLoading ? (
        "Getting Users..."
      ) : (
        <div style={{ width: "80%", margin: "10px auto" }}>
          <h3 style={{color:"white"}}>Admin</h3>
          {error && (
            <div
              style={{
                width: "90%",
                backgroundColor: "#ffb7b0",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  color: "#c94234",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            </div>
          )}
          {message && (
            <div
              style={{
                width: "100%",
                backgroundColor: "#abdcde",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  color: "cadetBlue",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {message}
              </p>
            </div>
          )}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      disabled={isDeletingUser}
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      {isDeletingUser ? "Deleting a user..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
