import React, { useEffect } from 'react'

export const AvisoComponent = () => {

useEffect(() => {
    //Cuando el componente se monta
    alert("El componente AvisoComponent está montado");

    //Cuando el componente se desmonta
    return () => {
        alert("AvisoComponent DESMONTADO");
    };
}, []); //Se ejecuta una vez porque le paso el array vacío


  return (
    <div>
        <hr />
        <h3>Hemos superado los 20 cambios</h3>
        <button onClick={e => {
            alert("Bienvenido!")
        }}>Mostrar Alerta</button>
    </div>
  )
}
