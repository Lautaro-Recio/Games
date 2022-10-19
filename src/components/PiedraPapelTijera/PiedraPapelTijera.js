import React from 'react';

import { useContext } from 'react'
import { Juegos } from '../Context/Juegos'
import './PiedraPapelTijera.css'
import piedra from '../../assets/imgs/stone.png'
import scissors from '../../assets/imgs/scissors.png'
import papel from '../../assets/imgs/paper.png'
import png from "../../assets/imgs/png.png"

export default function PiedraPapelTijera(){
    const {eleccionJugador,eleccion,eleccionRandom,eleccionIA} = useContext(Juegos)
    return(
        <div className="fondoPiedraPapelscissors">
            <h3> Rock, Paper, scissors</h3>
            {/* Jugador */}
            <div className='jugador'>
                <div>
                    <img src={eleccion===""?png:eleccion}  alt="" />
                </div>
                <div className='opciones'>
                    <button disabled={eleccion!==""} onClick={()=>eleccionJugador(piedra)}> <img src={piedra} alt="stone" /> </button>                
                    <button disabled={eleccion!==""} onClick={()=>eleccionJugador(papel)}> <img src={papel} alt="paper" /> </button>
                    <button disabled={eleccion!==""} onClick={()=>eleccionJugador(scissors)}> <img src={scissors} alt="scissors" /></button>
                </div>
            </div>
            {/* Pc o ia */}
            <div className='inteligencia'>
                <div>
                    <img src={eleccionIA===""?png:eleccionIA} alt="" />
                </div>
                
            </div>
            <button className='jugar' disabled={eleccion===""} onClick={()=>eleccionRandom()}>Play</button>
        </div>
    )
}