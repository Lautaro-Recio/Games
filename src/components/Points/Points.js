import React, { useContext, useState } from 'react';
import { Juegos } from '../Context/Juegos';


export default function Points(){
    
    const {IAWin,userWin} = useContext(Juegos)
    
    if(IAWin){
        console.log(IAWin)

    }else if(userWin){
        console.log(userWin)

    }

    return(
        <>
            <h1 style={{color:userWin?"red":"orange"}}>hola</h1>
        </>
    )
}