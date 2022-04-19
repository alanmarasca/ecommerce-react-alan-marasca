import React from 'react';
import './NavBar.css';




function NavBar(props) {
    return (
        <div>
            


            
           <ul className='nav'>
            
                <a href="#" className='TituloPrincipal'>TALLER DE RECUERDOS</a>
               <ul className='TitulosSecundarios'>
               <a href="#" className='ListaDerecha'> Productos</a>
               <a href="#" className='ListaDerecha'> Contacto </a>
               <a href='#'className='ListaDerecha'> Quienes Somos</a>
               <a href="#" className='ListaDerecha'> Iniciar Sesion</a>
               <a href="#" className='ListaDerecha'> Registrate</a>
              </ul>
           </ul>

        </div>
    );
}




export default NavBar;