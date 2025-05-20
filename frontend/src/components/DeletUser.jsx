import React from 'react'

export default function deletUser ({userId, onUserUpdated}) {

    // Función para eliminar usuario
    const deleteUser = () => {

        if (!userId) {

            console.error('ID de usuario no proporcionado');
            return;
        }

        fetch(`http://localhost:5000/api/delet/users/${userId}`, {
            method: 'DELETE'
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al eliminar el usuario');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Usuario eliminado:', data);
            // Llama a la función de actualización de usuario
            if (onUserUpdated) {
                onUserUpdated(userId);
            }
        })
        .catch((error) => {
            console.error('Error en la conexión o en el servidor:', error.message);
        });

    }

  return (
    <>
        <button className="btn btnDl" onClick={deleteUser}>
            Delet
        </button>
    </>
  )
}
