import React, {useEffect, useState} from 'react'
import { AvisoComponent } from './AvisoComponent';

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

    //Hook useState para crear un contador mediante desestructuración
    const [ contador, setContador ] = useState(0);

    //Crear estado con useEffect y con [] como 2do parámetro solo se ejecuta 1 vez
    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent!!");
    }, []);


    //Solo se ejecuta cuando se cambia el algo en específico en este caso el [USUARIO, FECHA] porque se encuentra entre corchetes
    useEffect(() => {
        setContador(contador + 1);
        console.log("Has modificado el usuario " + contador + " veces");
    }, [usuario, fecha]);

    return (
    <div>
        <h1>El Efecto - Hook useEffect</h1>

        <strong className={ contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>
        <strong className={contador >= 4 ? 'label label-yellow' : 'label'}>{fecha}</strong>

        <p>
            <input type='text'
                    onChange={ modUsuario }
                    placeholder='Cambia el nombre'
            />
            
            <button onClick={cambiarFecha}>Cambiar Fecha</button>
        </p>

        //Condicional Ternaria, si se cumple la condición se carga el componente
        {contador > 20 && <AvisoComponent />}
    </div>
  )
}
