import React, { useEffect, useState } from 'react'

export const AsyncAwaitComponent = () => {

    // Creamos el hook useState que actualizará los usuarios
    const [usuariosAW, setUsuariosAW] = useState([]);

  const getUsuariosAjaxAW = async() => {

    //Hacer la petición con fetch y mantenerlo en espera hasta que traiga todos los resultados
    const peticion = await fetch("https://reqres.in/api/users?page=2");
    
    //Convertir el resultado en una formato json
    const {data} = await peticion.json();

    setUsuariosAW(data);
  }

//Que se ejecute la primera vez que carga la página
  useEffect(() => {
    getUsuariosAjaxAW();
  },[]);

  return (
    <div>
        <h3>Async Await Componente</h3>
        <ol className='usuariosAsyncAwait'>
            {
                usuariosAW.map(usuarioAW => {
                    console.log(usuarioAW);
                    return <li key={usuarioAW.id}>{usuarioAW.first_name} {usuarioAW.last_name}</li>
                })
            }
        </ol>
    </div>
  )
}
