import React from 'react';
import './NavBar.css';
import imgLogo from '../NavBar/Imagenes/logo.png'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../CartContextProvider';



function NavBar() { 
  const {totalCount} = useCartContext(); 
    return (
       <header>
        <div>
            


            
           <ul className='nav'>
              <a href="#">  <img width="100" src={imgLogo} alt="Logo Tienda"/></a>

                <a href="#" className='TituloPrincipal'><NavLink to='/'>TALLER DE RECUERDOS </NavLink> </a>
               <ul className='TitulosSecundarios'>
               <a href="#" className='ListaDerecha'> <NavLink to='/category/Cuadros'> Cuadros</NavLink></a>
               <a href="#" className='ListaDerecha'> <NavLink to='/category/Fotos'> Fotos</NavLink>  </a>
               <a href='#'className='ListaDerecha'>  <NavLink to='/category/Imanes'> Imanes</NavLink></a>
               <a href="#" className='ListaDerecha'> <NavLink to='/category/Calendarios'>Calendarios </NavLink> </a>
               <a href="#" className='ListaDerecha'> <NavLink to='/category/Especiales'>  Especiales</NavLink></a>
              </ul>
             
              <div className='Carrito'>
               { totalCount() > 0 && <CartWidget/>}
               </div>
              
           </ul>
           
         </div>
         
        </header>
    )
}




export default NavBar;