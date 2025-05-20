import React from 'react'

export default function SendListButton({userId, onUserUpdated}) {

    const sentToList = () => {

        if (!userId) {
            console.error('ID de usuario no proporcionado');
            return;
        }
        fetch(`http://13.220.160.160:5000/api/restore/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({status: 1})
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al enviar el usuario a lista');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Usuario restaurado:', data);
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
        <button className=" btnRs btn " onClick={sentToList}>
            Restore
        </button>
    </>
  )
}
