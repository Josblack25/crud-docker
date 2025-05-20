import React, { useState } from "react";

export default function ModalForm({ setUsers }) {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = (newUser) => {
    fetch("http://13.220.160.160:5000/api/create/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.data || result.data.status === undefined) {
          console.error("Error: Datos incompletos recibidos", result);
          return;
        }
        setUsers((prevUsers) => [...prevUsers, result.data]);
        console.log("Usuario agregado:", result.data);
        setFormData({ name: "", email: "", age: "" });
        setIsModalOpen(false); // Cierra el modal después del éxito
      })
      .catch((error) => console.error("Error al agregar usuario:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, age} = formData;

    if (!name || !email || !age ) {
      alert("Por favor completa todos los campos.");
      return;
    }

    addUser({ name, email, age, status:1 });
  };

  return (
    <>
      <button
        className="btn mr-10 btnNew"
        onClick={() => {
          console.log("Abriendo modal...");
          setIsModalOpen(true);
        }}
      >
        + New User
      </button>

      {isModalOpen && (
        <div className="modal modal-open" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Agregar nuevo usuario</h3>
            <p className="py-4">Llenar la información del nuevo usuario:</p>

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
                type="text"
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
                <button type="submit" className="btn">
                  + Add
                </button>
                <button
                  className="btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close!
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
