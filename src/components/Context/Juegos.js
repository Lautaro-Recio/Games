import React from 'react';

import { createContext, useState } from "react"
import piedra from '../../assets/imgs/stone.png'
import scissors from '../../assets/imgs/scissors.png'
import papel from '../../assets/imgs/paper.png'
import Swal from "sweetalert2"

export const Juegos = createContext()

const JuegosProvider=({children})=>{
    const [eleccion, setEleccion] = useState("")
    const [eleccionIA, setEleccionIA] = useState("")
    const [ganador, setGanador] = useState(true)
    const [empezar,setEmpezar] =useState(true)
    let IAWin = false
    let userWin =false
    


    //PIEDRA PAPEL O scissorsS
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            timer: 3000,
            showConfirmButton: false,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }
        )
       

        const eleccionArray = [
            piedra,
            papel,
            scissors,
        ]
        function eleccionRandom(){
            
            const randomIndex = Math.floor(Math.random()*eleccionArray.length)
            const eleccionJugadorIA= eleccionArray[randomIndex]
            setEleccionIA(eleccionJugadorIA)
        }
        /* ppt piedra papel o scissors */
        function ganaJugador(){
            Toast.fire({
                icon: 'success',
                title: 'Felicitaciones🥳',
                text: 'Ganaste el minijuego!',
                showCloseButton: false,
                showCancelButton: false,
            })
            IAWin=true
        }
        function ganaIA(){
            Toast.fire({
                icon: 'error',
                title: 'Oh no😓',
                text: 'Perdiste esta vez, vuelve a intentarlo!',
                showCloseButton: false,
                showCancelButton: false,
            })
            userWin=true
        }
        function eleccionJugador(ppt){
            setEleccion(ppt)
        }

        const reiniciar =()=>{
             setTimeout(() => {
                setEleccion("")
                setEleccionIA("")
                setGanador(true)
                userWin=false
                IAWin=false
            }, 1000); 
        }
            if((eleccion==="")&&(eleccionIA==="")){
                
            }else if ((eleccion === eleccionIA)&&(eleccionIA!=="")){
                /* EMPATE */
                Toast.fire({
                    icon: 'error',
                    title: 'Oh no😓',
                    text: 'Empataron esta vez, vuelve a intentarlo!',
                    showCloseButton: false,
                    showCancelButton: false,
                })
                reiniciar()

            }else if(((eleccion===piedra)&&(eleccionIA===scissors))||((eleccion===papel)&&(eleccionIA===piedra)) || ((eleccion===scissors)&&(eleccionIA===papel))){
                ganaJugador()
                reiniciar()
                
            }else if((eleccion)&&(eleccionIA==="")){
             
            }else{
                ganaIA()
                reiniciar()
            }
                
            
    //--------------------------------------------------------------------------------------------//
    //Circulos
        const [ganadorCirculos,setGanadorCirculos]=useState(false)
        const [niveles,setNiveles]=useState(1)
        const [jugar,setJugar]=useState(false)
        let colores = [
            {id:1,color:"red"},
            {id:2,color:"red"},
            {id:3,color:"red"},
            {id:4,color:"red"},
            {id:5,color:"red"},
            {id:6,color:"red"},
            {id:7,color:"#c50505"},
            {id:8,color:"red"},
            {id:9,color:"red"},
            {id:10,color:"red"},
            {id:11,color:"red"},
            {id:12,color:"red"},
        ]

        function eleccionCirculos(circuloTocado){
            if((circuloTocado !== "red") && (circuloTocado !== "brown")&& (circuloTocado !== "black")&& (circuloTocado !== "orange")&& (circuloTocado !== "grey")&& (circuloTocado !== "white")&& (circuloTocado !== "green")&& (circuloTocado !== "violet")&& (circuloTocado !== "yellow")&& (circuloTocado !== "pink")&& (circuloTocado !== "deeppink")&& (circuloTocado !== "cadetblue")&& (circuloTocado !== "blue")&& (circuloTocado !== "peru")&& (circuloTocado !== "palegreen") ){
                setNiveles(niveles+1)
                if(niveles===15){
                    ganaJugador()
                    setGanadorCirculos(true)
                }
            } else{
                Toast.fire({
                    icon: 'error',
                    title: 'Ese no es el diferente😓',
                    text: 'Intenta con otro!',
                    showCloseButton: false,
                    showCancelButton: false,
                })
            }
        }

    

    //--------------------------------------------------------------------------------------------//
    return (
        <Juegos.Provider value={{setGanadorCirculos,IAWin,userWin,Toast,empezar,setEmpezar,jugar,setJugar,setNiveles,niveles,colores,ganadorCirculos,eleccionCirculos,eleccionJugador,eleccion,eleccionRandom,eleccionIA,ganador}}>
            {children}
        </Juegos.Provider>
    )
}
export default JuegosProvider