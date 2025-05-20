import React, { useState, useEffect } from "react";
import DeletUser from "./DeletUser";
import SendListButton from "./SendListButton";

export default function TableList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("datos recibidos", data);
        setUsers(data.data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Elimina el usuario del array de usuarios
  const removeUserFromList = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <>
      <div className="lisTable borderColor flex items-center justify-center">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && Array.isArray(users)
              ? users
                  .filter((user) => user.status === 0)
                  .map((user) => (
                    <tr key={user.id} className="hover:bg-base-300">
                      <td>{user.id}</td>
                      <td>
                        {user.name.length > 10
                          ? `${user.name.substring(0, 10)}...`
                          : user.name}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        <SendListButton userId={user.id} onUserUpdated={removeUserFromList} />
                        <DeletUser userId={user.id} onUserUpdated={removeUserFromList} />
                      </td>
                    </tr>
                  ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}