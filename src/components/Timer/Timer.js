import React from 'react';

import { useContext, useState } from "react";
import { Juegos } from "../Context/Juegos";
import './Timer.css'
export default function Timer(){
    // TIMER
    const {Toast,setJugar,empezar,setEmpezar}= useContext(Juegos)
    let [tiempo,setTiempo]=useState(30)
    if(tiempo===-1){
        Toast.fire({
            icon: 'error',
            title: 'Oh no😓',
            text: 'Perdiste una vida, vuelve a intentarlo!',
            showCloseButton: false,
            showCancelButton: false,
        })
    } 
    function timer(){
        const Interval= setInterval(() => {
            setTiempo(tiempo=tiempo-1)
            setEmpezar(true)
            
        }, 1000); 
        setTimeout(()=>{
            setJugar(false)
            setTiempo(30)
            clearInterval(Interval)
        },31000)  
    }
    
    return(
        <>
            {(empezar===true)?(
                <div className="timer" >
                    <h3 >{tiempo}</h3>
                </div>
                ):(
                
                <div className="timer" >
                    <h3 >{tiempo}</h3>
                    <button onClick={timer}>Empezar</button>
                </div>
                )
            }
        </>

    )
}