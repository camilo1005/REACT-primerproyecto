import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Contendor } from '../Contenedor/Contendor'

export const Contador = () => {
    const [contador,setcontador]=useState(0)
    const sumar=()=>setcontador(contador+1)
    const restar=()=>setcontador(contador-1)
    const rest =()=>setcontador(0)

    const cambiocolor=()=>{
     let body =document.body;
     body.classList.toggle("oscuro");
    }

    
  return (
        <div className='contador'>
            <div className='respuesta'><Contendor textbutton1={contador}/></div>

            <div className='contador2'> 
                <div className='boton1'><Button styles={"sumar"} event={sumar} textButton="sumar"/></div>
                <div className='boton1'><Button styles={"restar"} event={restar} textButton="restar"/></div>
                <div className='boton1'><Button styles={"rest"} event={rest} textButton="rest"/></div>

                <div><Button styles={"cambio-color"} event={cambiocolor} textButton="Cambio color"/></div>

            </div>

        </div>

  )
}

