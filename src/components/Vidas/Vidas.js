import React from 'react';

import { useContext, useState } from 'react'
import { Juegos } from '../Context/Juegos'
import './Vidas.css'
export default function Vidas(){
    const {VidasUsuario}=useContext(Juegos)
    //FALTA AGREGAR EL ESTILO RED A LAS VDIAs
    return(
        <div className="conteinerVidas">
            {VidasUsuario.map((vidas)=>{
                return(
                    <div key={vidas.id} style={{backgroundColor: vidas.color}} className="vidas"><p>vida</p></div>
                )
            })}
            
        </div>
    )
}