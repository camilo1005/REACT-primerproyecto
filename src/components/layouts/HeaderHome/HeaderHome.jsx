import React from 'react';
import { Logo } from '../../UI/Logo/Logo';
import { NavHome } from '../../UI/NaveHome/NavHome';


export const HeaderHome = () => {
  return(
    <div className='contenedorpadre'>
        <Logo/>
        <NavHome/>
    </div>
  )
}
