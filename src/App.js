import React from 'react'
import { Tarjeta } from './Tarjeta'

//importar cada una de las imagenes y asignarlas a un objeto
import MarioImage from './imagenes/Mario.png'
import LuigiImage from './imagenes/Luigi.png'
import PeachesImage from './imagenes/Peaches.png'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <Tarjeta nombre="Mario" colorfavorito="Rojo" image={MarioImage}/>
        <Tarjeta nombre="Luigi" colorfavorito="Verde" image={LuigiImage}/>
        <Tarjeta nombre="Peaches" colorfavorito="Rosa" image={PeachesImage}/>
    </div>
  )
}
