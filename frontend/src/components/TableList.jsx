import React, { useState, useEffect } from "react";

import ModalForm from "./ModalForm";
import ModalUpdate from "./ModalUpdate";
import SendTrashButton from "./SendTrashButton";

export default function TableList() {

  const [users, setUsers] = useState([]);

  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  useEffect(() => {
    fetch('http://13.220.160.160:5000/api/data/users')
    .then((response) => response.json()) 
    .then((data) => {
      console.log("datos recibidos", data); 
      setUsers(data.data || []);
    })
    .catch((error) => console.error("Error fetching data:", error)); 
  },[]);

  // Función para actualizar el estado de los usuarios (mover a papelera)
  const updateUserState = (usersId) => {
    setUsers((prevUsers) =>
      prevUsers.map((users) =>
        users.id === usersId ? { ...users, status: 0 } : users
      )
    );
  };

  return (
    < >
      <div className="w-full flex items-center flex-col lisTable px-4 ">

        <div className="flex  flex-col md:flex-row justify-between items-center mt-10 w-full ">
          {/* Add new users */}
          <ModalForm setUsers={setUsers} />

          {/* Input de búsqueda */}
          <div className="navbar-end">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs md:max-w-sm mt-4 md:mt-0 "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Actualizar searchTerm
            />
          </div>
        </div>

        <div className=" lisTable w-full borderColor overflow-x-auto mt-5 ">
          
          <table className="table w-full min-w-[600px] block md:table ">
            <thead className="md:table-header-group">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

            {users && Array.isArray(users) ? (
              users
                .filter( user =>
                    user.status === 1 && // Filtrar usuarios con estado 1
                    user.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filtrar por el término de búsqueda
                )
                .map((user) => (
                  <tr key={user.id} className="hover:bg-base-300 md:table">
                    <td className=" md:table-cell font-bold">{user.id}</td>
                    <td className="md:table-cell">{user.name.length > 10 ? `${user.name.substring(0, 10)}...` : user.name}</td>
                    <td className=" md:table-cell">{user.email}</td>
                    <td className=" md:table-cell">{user.age}</td>
                    <td className="flex flex-wrap gap-2 mt-2 md:table-cell">
                      <ModalUpdate usertoUpdate={user} setUsers={setUsers} modalId={`update_modal_${user.id}`} />

                      {user.status === 1 && 
                      <SendTrashButton userId={user.id} onUserUpdated={updateUserState} />}
                    </td>
                  </tr>
                ))
                ) : (
                <tr>
                  <td colSpan="5">Cargando usuarios...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}