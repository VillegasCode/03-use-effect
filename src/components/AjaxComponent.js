import React, {useEffect, useState} from 'react'

export const AjaxComponent = () => {

// Creamos el hook useState que actualizará los usuarios
const [usuarios, setUsuarios] = useState([]);

//Obtendremos los usuarios de forma GENÉRICO / BÁSICO
const getUsuariosEstaticos = () => {
    setUsuarios([
        {"id":1,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson"},
        {"id":2,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson"},
        {"id":3,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke"},
        {"id":4,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields"},
    ]);
}

//Apenas se cargue la página va a llamar a la función getUsuariosEstativos()
useEffect(() => {
    getUsuariosEstaticos();
}, []);

  return (
    <div>
        <h3>Listado de Usuarios vía AJAX</h3>
        <ol className='usuarios'>
            {
                // Recorrer el array usuarios con .map y mostrarlos dentro de un <li>
                usuarios.map(usuario => {
                    console.log(usuario);
                    return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                })
            }
        </ol>

    </div>
  )
}
