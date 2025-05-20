import React, { useState, useEffect } from "react";

export default function ModalUpdate({ usertoUpdate, setUsers, modalId }) {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cargar los datos del usuario seleccionado en el formulario
  useEffect(() => {
    if (usertoUpdate) {
      setFormData({
        name: usertoUpdate.name,
        email: usertoUpdate.email,
        age: usertoUpdate.age,
      });
    }
  }, [usertoUpdate]);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para actualizar el usuario
  const updateUser = (updatedUser) => {
    fetch(`http://localhost:5000/api/update/users/${usertoUpdate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.data) {
          console.error("Error: Datos incompletos recibidos", data);
          return;
        }
        // Actualizar el estado de usuarios con los nuevos datos
        setUsers((prevUsers) => 
          prevUsers.map((user) =>
            user.id === usertoUpdate.id ? data.data : user
          )
        );
        console.log("Usuario actualizado:", data.data);


        // Cerrar el modal
        setIsModalOpen(false);

        // Limpiar el formulario
        setFormData({ name: "", email: "", age: "" });
      })
      .catch((error) => console.error("Error actualizar usuario:", error));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, age } = formData;

    if (name && email && age) {
      updateUser({ name, email, age });
    } else {
      console.log("Por favor completa todos los campos.");
    }
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button 
        className=" btnUpdate btn p-1.5 m-2"
        onClick = {() => {
          console.log("Abriendo modal...");
          setIsModalOpen(true);
        }}
      > 
        Update
      </button>

      { isModalOpen && (
        <div className="modal modal-open" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Update user</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                className="input input-bordered w-full mb-2"
              />
              <div className="modal-action">
                <button type="submit" className="btn">Save Changes</button>
                <button className="btn" onClick={() => { setIsModalOpen(false)}} >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
