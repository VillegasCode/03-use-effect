import React, { useEffect, useState } from 'react'

export const AsyncAwaitComponent = () => {

    // Creamos el hook useState que actualizará los usuarios
  const [usuariosAW, setUsuariosAW] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");
  
  const getUsuariosAjaxAW = () => {

  //Creando un DELAY a propósito para mostrar el ESTADO DE CARGA DE DATOS con un setTimeout
    setTimeout(async() => {
        try {
                //Hacer la petición con fetch y mantenerlo en espera hasta que traiga todos los resultados
            const peticion = await fetch("https://reqres.in/api/users?page=2");
            
            //Convertir el resultado en una formato json
            const {data} = await peticion.json();

            setUsuariosAW(data);
            //Después de ejecutar las líneas superiores significa que los datos ya se han cargado por lo tanto el estado de cargando se vuelve a false
            setCargando(false);
        } catch (error) {
            console.log(error);
            //Mostrando los errores en pantalla
            setErrores("Hubo errores en el proceso: " + error.message);
        }
  }, 2000);

  }

//Que se ejecute la primera vez que carga la página
  useEffect(() => {
    getUsuariosAjaxAW();
  },[]);


if (errores !== "") {
    //Cuando pasa algún error
    return (
        <div className='errores'>
            {errores}
        </div>
    );
} //Condicional para mostrar los datos después de que ya han sido cargados
else if (cargando == true) {
    //Cuando los datos se están cargando
    return (
        <div className='cargando'>
            Cargando Datos, espere...
        </div>
    );
} else if (cargando == false && errores === "") {
    //Cuando todo ha ido bien se muestra esto
  return (
    <div>
        <h3>Listado Async Await Componente</h3>
        <ol className='usuariosAsyncAwait'>
            {
                usuariosAW.map(usuarioAW => {
                    console.log(usuarioAW);
                    return <li key={usuarioAW.id}>
                                        <img src={usuarioAW.avatar} width="40px" />
                                        &nbsp;
                                        {usuarioAW.first_name} {usuarioAW.last_name}</li>
                })
            }
        </ol>
    </div>
  )
}
}