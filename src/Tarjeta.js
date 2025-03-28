import React from 'react'

export function Tarjeta( props ) {
  return (
    <div>
      <div>Nombre del personaje: {props.nombre}</div>
      <div>Color favorito: {props.colorfavorito}</div>
    </div>
  )
}
