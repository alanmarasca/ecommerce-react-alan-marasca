import React from 'react';
import './NavBar.css';
import imgLogo from '../NavBar/Imagenes/logo.png'
import CartWidget from '../CartWidget';



function NavBar(props) {
    return (
       <header>
        <div>
            


            
           <ul className='nav'>
              <a href="#">  <img width="100" src={imgLogo} alt="Logo Tienda"/></a>

                <a href="#" className='TituloPrincipal'>TALLER DE RECUERDOS</a>
               <ul className='TitulosSecundarios'>
               <a href="#" className='ListaDerecha'> Productos</a>
               <a href="#" className='ListaDerecha'> Contacto </a>
               <a href='#'className='ListaDerecha'> Quienes Somos</a>
               <a href="#" className='ListaDerecha'> Iniciar Sesion</a>
               <a href="#" className='ListaDerecha'> Registrate</a>
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