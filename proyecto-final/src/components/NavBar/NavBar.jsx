import React from 'react';
import './NavBar.css';
import imgLogo from '../NavBar/Imagenes/logo.png'
import CartWidget from '../CartWidget';



function NavBar() {
    return (
       <header>
        <div>
            


            
           <ul className='nav'>
              <a href="#">  <img width="100" src={imgLogo} alt="Logo Tienda"/></a>

                <a href="#" className='TituloPrincipal'>TALLER DE RECUERDOS</a>
               <ul className='TitulosSecundarios'>
               <a href="#" className='ListaDerecha'> Cuadros</a>
               <a href="#" className='ListaDerecha'> Fotos </a>
               <a href='#'className='ListaDerecha'> Imanes</a>
               <a href="#" className='ListaDerecha'> Calendarios</a>
               <a href="#" className='ListaDerecha'> Fechas especiales</a>
              </ul>
              <div className='Carrito'>
               <CartWidget/>
               </div>
           </ul>
           
         </div>
         
        </header>
    )
}




export default NavBar;