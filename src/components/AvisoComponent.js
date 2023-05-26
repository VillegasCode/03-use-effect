import React from 'react'

export const AvisoComponent = () => {
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
