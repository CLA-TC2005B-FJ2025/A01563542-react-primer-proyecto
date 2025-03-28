import React from 'react'
import { Tarjeta } from './Tarjeta'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <Tarjeta nombre="Mario" colorfavorito="Rojo"/>
        <Tarjeta nombre="Luigi" colorfavorito="Verde"/>
        <Tarjeta nombre="Peach" colorfavorito="Rosa"/>
    </div>
  )
}
