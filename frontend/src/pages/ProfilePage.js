import React from 'react'

export default function ProfilePage({user, setPage}) {
  return (
    <div style={{ width: "80%", margin: "10px auto" }}>
    <h3 style={{color:"white"}}>My Profile</h3>
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
                <tr >
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setPage("changePasswordPage")
                      }}
                    >
                      Change Password
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
    </div>
  )
}
