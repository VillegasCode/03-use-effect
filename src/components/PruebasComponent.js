import React, {useEffect, useState} from 'react'

export const PruebasComponent = () => {
  
    const [usuario, setUsuario] = useState("Alex Villegas");
  
    // Cambiar el nombre a través del input con la función modUsuario
    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    const [fecha, setFecha] = useState("01-01-1998");

    const cambiarFecha = e => {
        setFecha(new Date().toLocaleDateString());
    }

    //Crear estado con useEffect y con [] como 2do parámetro solo se ejecuta 1 vez
    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent!!");
    }, []);


    //Solo se ejecuta cuando se cambia el algo en específico en este caso el USUARIO
    useEffect(() => {
        console.log("Has modificado el usuario!!");
    }, [usuario]);

    return (
    <div>
        <h1>El Efecto - Hook useEffect</h1>

        <strong className='label'>{usuario}</strong>
        <strong>{fecha}</strong>

        <p>
            <input type='text'
                    onChange={ modUsuario }
                    placeholder='Cambia el nombre'
            />
            
            <button onClick={cambiarFecha}>Cambiar Fecha</button>
        </p>

    </div>
  )
}
